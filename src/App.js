import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Header from './utilities/header/Header';
import Sidebar from './utilities/sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      	<Router>
			<div className="App">
				<Sidebar />
				<main class="main-content">
					<section id="home">
						<Home />
					</section>
					<section id="portfolio">
						<Portfolio/>
					</section>
					<section id="contact">

					</section>
				</main>
				<footer>

				</footer>
			</div>
	  </Router>
    </div>
  );
}

export default App;
