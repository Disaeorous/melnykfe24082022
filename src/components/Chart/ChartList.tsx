import { useEffect, useState } from 'react';
import chartData from '../../data/chartData.json';

export const ChartList: React.FC<any> = () => {
	const [chart, setChart] = useState<any>([]);

	useEffect(() => {
		const fetchChart = async () => {
			const res = await fetch(`${chartData}`);
			const data = await res.json();
			console.log(data);
		};
		setChart(fetchChart);
	}, []);

	return (
		<div>
			{chart.map((item: any) => {
				<div key={item.name}>{item.name}</div>;
			})}
		</div>
	);
};
