import React, { useEffect, useRef, useState } from 'react';
import styles from './chart.module.css';
import chartData1 from '../../data/chartData.json';
import { Chart } from './Chart';

// const initialData = [
// 	{ name: 'Landing Page', time: 7.4 },
// 	{ name: 'Configurator', time: 0.2 },
// 	{ name: 'Check-out', time: 7.0 },
// 	{ name: 'Deal', time: 3.8 },
// ];

interface ChartProps {
	name: string;
	time: number;
}

export const ChartList2: React.FC<any> = () => {
	const [chartData, setChartData] = useState<any>([]);
	const btnRef = useRef<any>();

	const [index, setIndex] = useState(0);

	function changeChart() {
		let newIndex = Math.floor(Math.random() * (chartData.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
		setIndex(newIndex);
	}

	const handlechange = (index: number) => {
		const newChart = [...chartData];
		newChart[index].time = Math.floor(Math.random() * (100 - 0) + 0);
		setChartData(newChart);

		setTimeout(() => {
			btnRef.current.click();
			console.log(btnRef.current);
		}, 1000);
	};

	const autoClicked = () => {
		setTimeout(() => {
			btnRef.current.click();
			console.log(btnRef.current);
		}, 2000);
	};

	useEffect(() => {
		setChartData(chartData1);
		console.log(chartData);
		autoClicked();
	}, []);

	return (
		<div className={styles.chart__group}>
			{chartData.map((item: ChartProps, index: number) => {
				return (
					<React.Fragment key={index}>
						<Chart
							name={item.name}
							time={item.time}
							step={index}
							values={chartData1}
						></Chart>
						<button
							data-testid={`button-${index}`}
							ref={btnRef}
							onClick={() => handlechange(index)}
							className='btn'
							type='button'
						>
							Change the data
						</button>
					</React.Fragment>
				);
			})}
			{/* {JSON.stringify(chartData[index])} */}
		</div>
	);
};
