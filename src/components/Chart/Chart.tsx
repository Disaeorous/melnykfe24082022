import chartData from '../../data/chartData.json';
import styles from './chart.module.css';

interface ChartProps {
	name: string;
	time: number;
}

export const Chart: React.FC<ChartProps> = (props) => {
	const { name, time } = props;

	return (
		<section className={styles.chart}>
			<h1 className={styles.chart__title}>Spent time (seconds)</h1>
			<div className={styles.chart__box}>
				<h2 className={styles.chart__name}>{name}</h2>
				<div className={styles.chart__bar}>
					<div style={{ width: '20%' }} className={styles.chart__progress}>
						{time}
					</div>
				</div>
			</div>
		</section>
	);
};
