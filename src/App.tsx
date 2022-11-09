import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	);
}

export default App;
