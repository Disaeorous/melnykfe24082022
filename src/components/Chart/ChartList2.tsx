import React, { useEffect, useState } from 'react';
import { Chart } from './Chart';
import chartData1 from '../../data/chartData.json';

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

	useEffect(() => {
		setChartData(chartData1);
		console.log(chartData);
	}, []);

	const [index, setIndex] = useState(0); // setting 1st quote as default

	function changeChart() {
		let newIndex = Math.floor(Math.random() * (chartData.length - 0) + 0); // now on every click setting a random index between 0 and quotes array length (quotes array length is excluded)
		setIndex(newIndex);
	}

	return (
		<>
			{chartData.map((item: ChartProps, index: number) => {
				return (
					<React.Fragment key={index}>
						<Chart name={item.name} time={item.time}></Chart>
					</React.Fragment>
				);
			})}
			<button onClick={changeChart} className='btn' type='button'>
				Change the data
			</button>
			{JSON.stringify(chartData[index])}
		</>
	);
};
