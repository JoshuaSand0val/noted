import styles from "./Tabs.module.css";

/** Tabs to choose from created notes. */
export default function Tabs() {
	return (
		<menu className={styles.container}>
			<li className={styles.tab}>Note 1</li>
			<li className={styles.tab}>Note 2</li>
			<li className={styles.tab}>Note 3</li>
		</menu>
	);
}