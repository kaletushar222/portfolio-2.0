import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Sidebar from './utilities/sidebar/Sidebar';
import Header from './utilities/header/Header';

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
