import { useLazyQuery, useQuery } from "@apollo/client";
import type {
	LazyQueryHookOptions,
	NoInfer,
} from "@apollo/client/react/types/types";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { TadaDocumentNode } from "gql.tada";
import type { FieldNode, OperationDefinitionNode } from "graphql/language/ast";
import { useEffect, useState } from "react";

/**
 * Fetches a paginated query and provides methods to fetch more data
 * @param query The query to fetch
 * @param options The options for the query
 */
export const usePaginatedQuery = <TNodeChild, TData, TVariables>(
	query:
		| TypedDocumentNode<TData, TVariables>
		| TadaDocumentNode<TData, TVariables>,
	options?: LazyQueryHookOptions<
		NoInfer<TData>,
		NoInfer<Omit<TVariables, "page">>
	> & {
		skip?: boolean;
		onResults?: (results: TNodeChild[]) => void;
		pageSize?: number;
	},
) => {
	const { data, loading, refetch, fetchMore } = useQuery(query, {
		...options,
		notifyOnNetworkStatusChange: true,
		variables: {
			...options?.variables,
			page: {
				first: options?.pageSize ?? 100,
			},
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any,
	});
	const elemName = (
		(query.definitions[0] as OperationDefinitionNode).selectionSet
			.selections[0] as FieldNode
	).name.value;

	return {
		data,
		loading,
		loadNextPage: (variables?: NoInfer<Omit<TVariables, "page">>) => {
			const availableData = (
				data as Record<string, PaginatedData<TNodeChild>>
			)?.[elemName];
			if (availableData?.pageInfo.hasNextPage) {
				return refetch({
					...options?.variables,
					...variables,
					page: {
						first: options?.pageSize ?? 100,
						after: availableData.pageInfo.endCursor,
					},
				} as TVariables);
			}
		},
		loadNextPageWithoutAppendingOldData: (
			variables?: NoInfer<Omit<TVariables, "page">>,
		) => {
			const availableData = (
				data as Record<string, PaginatedData<TNodeChild>>
			)?.[elemName];
			return fetchMore({
				variables: {
					...options?.variables,
					...variables,
					page: {
						first: options?.pageSize ?? 100,
						after: availableData?.pageInfo.endCursor,
					},
				},
			});
		},
	};
};

interface PaginatedData<Node> {
	nodes: Array<Node>;
	pageInfo: {
		endCursor?: string | null;
		hasNextPage: boolean;
	};
	totalCount?: number | null;
}

/**
 * Fetches all results from a paginated query
 * @param query The query to fetch
 * @param options The options for the query
 */
export const usePaginatedLoadAll = <TNodeChild, TData, TVariables>(
	query:
		| TypedDocumentNode<TData, TVariables>
		| TadaDocumentNode<TData, TVariables>,
	options?: LazyQueryHookOptions<
		NoInfer<TData>,
		NoInfer<Omit<TVariables, "page">>
	> & {
		skip?: boolean;
		onResults?: (results: TNodeChild[]) => void;
	},
) => {
	const [loading, setLoading] = useState(!options?.skip);
	const [results, setResults] = useState<TNodeChild[]>([]);
	const [fetchResults] = useLazyQuery(query, options);

	const fetchAll = async (variables?: NoInfer<Omit<TVariables, "page">>) => {
		const elemName = (
			(query.definitions[0] as OperationDefinitionNode).selectionSet
				.selections[0] as FieldNode
		).name.value;
		setLoading(true);
		let hasNextPage: boolean | undefined = true;
		let cursor = null;
		const nodes: TNodeChild[] = [];
		while (hasNextPage) {
			const { data, error } = await fetchResults({
				variables: {
					...options?.variables,
					...variables,
					page: {
						first: 100,
						after: cursor,
					},
				} as TVariables,
			});

			if (error) {
				throw error;
			}

			const dataFromElem = (
				data as Record<string, PaginatedData<TNodeChild>>
			)?.[elemName];
			if (dataFromElem) {
				nodes.push(...(dataFromElem.nodes ?? []));
				hasNextPage = dataFromElem.pageInfo.hasNextPage;
				cursor = dataFromElem.pageInfo.endCursor;
			}
		}
		setResults(nodes);
		options?.onResults?.(nodes);
		setLoading(false);
		return nodes;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (options?.skip) {
			return;
		}
		fetchAll();
	}, [options?.skip]);

	return { loading, results, refetch: fetchAll };
};
