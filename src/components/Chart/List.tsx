import React, { useEffect, useRef, useState } from 'react';
import chartAPI from '../../data/chartData.json';

import styles from './test.module.css';
import { Item } from './Item';

interface ChartProps {
	name: string;
	time: number;
	percentage: number;
}

export const List: React.FC<any> = () => {
	const [chartList, setChartList] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<any>(true);
	const [step, setStep] = useState<number>(0);
	const [items, setItems] = useState<any>([]);
	const btnRef = useRef<any>(null);

	const getChartItems = async () => {
		setIsLoading(true);
		const chartItems = await setChartList(chartAPI);
		setIsLoading(false);

		return chartItems;
	};

	const changeProgressTime = (index: number) => {
		const newTime = [...chartList];
		// newTime[index] = {
		// 	...newTime[index],
		// 	time: Math.floor(Math.random() * 100 + 1) / 10,
		// };

		setItems(newTime);
		newTime[0].time = Math.floor(Math.random() * 100 + 1) / 10;
		newTime[1].time = Math.floor(Math.random() * 100 + 1) / 10;
		newTime[2].time = Math.floor(Math.random() * 100 + 1) / 10;
		newTime[3].time = Math.floor(Math.random() * 100 + 1) / 10;
	};

	const autoClick = () => {
		setTimeout(() => {
			btnRef.current.click();
		}, 2000);
	};

	useEffect(() => {
		setTimeout(() => {
			getChartItems();
			autoClick();
		}, 2000);
	}, [items]);

	return (
		<section className={styles.chart__list}>
			{isLoading ? (
				<div>Loading</div>
			) : (
				chartList.map((item: ChartProps, index: number) => {
					const percantage = Math.round((chartList[index].time * 10 * 5) / 10);

					return (
						<React.Fragment key={index}>
							<Item {...item} percentage={percantage} />
						</React.Fragment>
					);
				})
			)}

			{!isLoading && (
				<button
					ref={btnRef}
					onClick={() => changeProgressTime(step)}
					className={styles.chart__button}
					type='button'
				>
					Change the value
				</button>
			)}
		</section>
	);
};
