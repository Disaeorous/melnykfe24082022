import { ChartProps } from '../../common/interfaces';
import styles from './chart.module.css';

export const Chart: React.FC<ChartProps> = (props) => {
	const { name, time, step, values } = props;

	const percentage = Math.round((step / values.length) * 100);
	console.log(percentage);

	return (
		<section className={styles.chart}>
			<div className={styles.chart__box}>
				<h2 className={styles.chart__name}>{name}</h2>
				<div className={styles.chart__bar}>
					<div
						data-testid={`progress-time-${step}`}
						style={{ width: `${percentage}%` }}
						className={styles.chart__progress}
					>
						{time}
					</div>
				</div>
			</div>
		</section>
	);
};
