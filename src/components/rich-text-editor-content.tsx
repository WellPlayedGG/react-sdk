import { Link, RichTextEditor } from "@mantine/tiptap";
import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const RichTextEditorContent = ({
	content,
	style,
}: {
	content: string;
	style?: React.CSSProperties;
}) => {
	const editor = useEditor({
		editable: false,
		extensions: [
			StarterKit,
			Underline,
			Link,
			Superscript,
			SubScript,
			Highlight,
			TextAlign.configure({ types: ["heading", "paragraph"] }),
		],
		content,
	});

	return (
		<RichTextEditor
			editor={editor}
			style={style}
			styles={{
				root: {
					border: "none",
				},
				content: {
					backgroundColor: "transparent",
				},
			}}
		>
			<RichTextEditor.Content />
		</RichTextEditor>
	);
};
