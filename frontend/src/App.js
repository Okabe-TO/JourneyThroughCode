import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Joke from './pages/Joke';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/joke" element={<Joke />} />
			</Routes>
		</Router>
	);
}

export default App;
