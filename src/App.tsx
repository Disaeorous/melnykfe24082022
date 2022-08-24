import './styles/base.css';
import './styles/reset.css';
import './styles/core.css';
import './styles/main.css';

import { Chart } from './components/Chart';
import chartData from './data/chartData.json';
import { ChartList } from './components/Chart/ChartList';
import { ChartList2 } from './components/Chart/ChartList2';

function App() {
	return (
		<div className='App'>
			<h1 className='chart__title'>Spent time (seconds)</h1>
			<ChartList2 />
			{/* <ChartList /> */}
		</div>
	);
}

export default App;
