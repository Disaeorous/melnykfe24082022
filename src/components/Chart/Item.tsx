import styles from './test.module.css';

interface ChartProps {
	name: string;
	time: number;
	percentage: number;
}

export const Item: React.FC<ChartProps> = (props) => {
	const { name, time, percentage } = props;

	return (
		<article className={styles.chart__item}>
			<h2 className={styles.chart__title}>{name}</h2>

			<div className={styles.chart__progress}>
				<div className={styles.chart__value}>
					<span className={styles.chart__time}>{time}</span>
				</div>

				<span
					style={{ width: `${percentage}%` }}
					className={styles.chart__bar}
				></span>
			</div>
		</article>
	);
};
