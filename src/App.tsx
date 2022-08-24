import './styles/base.css';
import './styles/reset.css';
import './styles/core.css';
import './styles/main.css';

// import { ChartList2 } from './components/Chart/ChartList2';
// import { List } from './components/Chart/List';
import { Content } from './components/Chart/Content';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Content />
			</div>
			{/* <h1 className='chart__title'>Spent time (seconds)</h1> */}
			{/* <List /> */}
			{/* <ChartList2 /> */}
		</div>
	);
}

export default App;
