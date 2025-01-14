import styles from "./App.module.css"

/** The website application component. */
export default function App() {
	return (
		<article className={styles.container}>
			<aside className={styles.toolbar}>
				FORMATTING TOOLBAR
			</aside>
			<main className={styles.content}>
				NOTE CONTENT
			</main>
			<aside className={styles.tabs}>
				NOTE TABS
			</aside>
		</article>
	);
}