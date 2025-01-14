import styles from "./Editor.module.css";

/** WYSIWYG markdown editor interface. */
export default function Editor() {
	return (
		<textarea className={styles.container} autoFocus={true} />
	);
}