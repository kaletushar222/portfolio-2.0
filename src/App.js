import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Sidebar from './utilities/sidebar/Sidebar';

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
					<section id="projects">
						<h1> Under development </h1>
					</section>
					<section id="contact">
						<Contact />
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
