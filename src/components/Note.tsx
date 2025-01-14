import styles from "./Note.module.css";

interface Note {
	markdown: string
}

/**
 * A note rendered in Markdown.
 * @param props.markdown Markdown content.
 */
export default function Note({ markdown }: Note) {
	return (
		<article className={`${styles.container} semantic rendered`}>
			{markdown}
		</article>
	);
}