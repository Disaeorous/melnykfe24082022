import './styles/base.css';
import './styles/reset.css';
import './styles/core.css';
import './styles/main.css';

import { Chart } from './components/Chart';
import chartData from './data/chartData.json';

function App() {
	return (
		<div className='App'>
			<Chart name={'Landing page'} time={2} />
		</div>
	);
}

export default App;
