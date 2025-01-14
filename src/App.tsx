import Editor from "./components/Editor";
import Tabs from "./components/Tabs";

import styles from "./App.module.css"

/** The website application component. */
export default function App() {
	return (
		<article className={styles.container}>
			<aside className={styles.toolbar}>
				FORMATTING TOOLBAR
			</aside>
			<div className={styles.viewer}>
				<main className={styles.content}>
					NOTE CONTENT
				</main>
				<aside className={styles.editor}>
					<Editor />
				</aside>
			</div>
			<aside className={styles.tabs}>
				<Tabs />
			</aside>
		</article>
	);
}