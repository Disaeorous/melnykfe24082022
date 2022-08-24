import styles from './test.module.css';
import { List } from './List';

export const Content = () => {
	return (
		<section className={styles.chart}>
			<h1 className='chart__title'>Spent time (seconds)</h1>
			<List />
		</section>
	);
};
