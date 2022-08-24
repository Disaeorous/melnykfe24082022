
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { ChartList2 } from './ChartList2';
import dataChart from '../../data/chartData.json';
import { Chart } from './Chart';

export const chartData = [
	{ name: 'Landing Page', time: 7.4 },
	{ name: 'Configurator', time: 0.2 },
	{ name: 'Check-out', time: 7.0 },
	{ name: 'Deal', time: 3.8 },
];

test('should render CharsList', () => {
	render(<ChartList2 />);
	const chartListBtn = screen.getByTestId('button-1');
	expect(chartListBtn).toBeInTheDocument();
});

test('Button should be clicked and change the value of progrees', () => {
	render(<ChartList2 />);
	const chartListBtn = screen.getByTestId('button-1');
	const chartProgress = screen.getByTestId('progress-time-1');
	const handleClick = jest.fn();
	// fireEvent.click(screen.getByText(/Change the data/i));
	fireEvent.click(chartListBtn);
	expect(chartProgress.textContent).toBe('12');

	fireEvent.click(chartListBtn);
	expect(chartListBtn).toHaveBeenCalledTimes(2);
});

// describe('Change the value of chart', () => {
// 	it('Should render progress time', () => {
// 		render(
// 			<Chart name='Landing Page' time={7.4} step={1} values={dataChart} />
// 		);
// 		const chartListProgress = screen.getByTestId('progress-time');
// 		// const timeElement = screen.getByText(/7.4/i);
// 		expect(chartListProgress).toBeInTheDocument();
// 	});
// });

// test('matches snapshot', () => {
// 	render(<Chart name='Landing Page' time={7.4} step={1} values={chartData} />);
// 	const tree = renderer.create(<Chart name={chartData}/>)
// 	const chartListProgress = screen.getByTestId('progress-time');
// });

