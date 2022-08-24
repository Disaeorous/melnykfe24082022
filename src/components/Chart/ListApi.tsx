import { useEffect, useState } from 'react';
import chartAPI from '../../data/chartData.json';

export const ListApi = () => {
	const [chartList, setChartList] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<any>(true);

	const fetchChart = async () => {
		setIsLoading(true);

		const chartAPI = await fetch('../../data/chartData.json');
		const chartData = await chartAPI.json();

		setIsLoading(false);
		console.log(chartData);

		return chartData;
	};

	const getChartItems = async () => {
		setIsLoading(true);

		const chartItems = await fetchChart();
		setChartList(chartItems);

		setIsLoading(false);
	};

	useEffect(() => {
		getChartItems();
	}, []);

	return (
		<>
			{isLoading ? (
				<div>Loading</div>
			) : (
				chartList.map((item: any) => {
					return <div>{item.name}</div>;
				})
			)}
		</>
	);
};
