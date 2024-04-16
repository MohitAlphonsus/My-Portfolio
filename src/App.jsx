import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BriefAside, Main, Nav } from './components';
import { About, Contact, Projects, Resume } from './pages';

function App() {
	return (
		<div className="app">
			<div className="mainContainer">
				<Router>
					<BriefAside />
					<Main>
						<Routes>
							<Route path="/" element={<About />} />
							<Route path="/resume" element={<Resume />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Main>
					<Nav />
				</Router>
			</div>
		</div>
	);
}

export default App;
