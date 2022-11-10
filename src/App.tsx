import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';
import Navbar from 'components/Navbar/Navbar';

function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</>
	);
}

export default App;
