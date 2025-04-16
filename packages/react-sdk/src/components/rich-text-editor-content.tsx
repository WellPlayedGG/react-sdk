import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const RichTextEditorContent = ({
	content,
	style,
}: {
	content: string;
	style?: React.CSSProperties;
}) => (
	<div style={style}>
		<EditorProvider
			editable={false}
			extensions={[
				StarterKit,
				Underline,
				Superscript,
				SubScript,
				Highlight,
				TextAlign.configure({ types: ["heading", "paragraph"] }),
			]}
			content={content}
		/>
	</div>
);
