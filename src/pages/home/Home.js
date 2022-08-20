import React from 'react';
import Image from 'react-bootstrap/Image';
import './home.css';

const Home = () => {
	return (
		<div>
			<Image fluid={true} className='background-img ' alt="main background" src="images/nasa.jpg"/>
			<div className='middle'>
				<div className='overlay-text'>
					<h1 className='home-heading'>
						Hii , I'm Tushar,
					</h1>
					<p>
						A software engineer specialized in both
					</p>
					<span style={{color : "#ffeb00"}}>front-end </span> and <span style={{color: "#00e7ff"}}> back-end </span>
				</div>
			</div>
      </div>
	)
}
export default Home;