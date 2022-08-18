import $ from 'jquery';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import './portfolio.css';

export default class Portfolio extends Component {

    componentDidMount(){
        $(document).ready(function(){
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        });
    }

    render() {
        return (
            <div class="container">
            <h2>Our  Partners/ Our Clients</h2>
            <section class="customer-logos slider">
                <div class="slide"><Image src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
                <div class="slide"><Image src="http://www.webcoderskull.com/img/logo.png"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
                <div class="slide"><Image src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
            </section>
            <h2><a href="http://www.webcoderskull.com" target="_blank">http://www.webcoderskull.com</a></h2>
        </div>
    )
  }
}