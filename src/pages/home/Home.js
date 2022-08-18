import React, { Component } from 'react';
import './home.css';
import Image from 'react-bootstrap/Image'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Image fluid={true} className='background-img' alt="main background" src="images/nasa.jpg"/>
      </div>
    )
  }
}