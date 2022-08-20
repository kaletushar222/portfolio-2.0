
import React from 'react';
import './portfolio.css';

const data_set = [
    {
        id : 1,
        tech : "meteorjs",
        companies : ["procmart"],
        label : "Meteor Js"
    },
    {
        id : 2,
        tech : "javascript",
        companies : ["procmart", "accenture"],
        label : "JavaScript"
    }
]

const Portfolio = ()=>{
    function ltr(){
        console.log("tushar")
        var  abox = document.getElementsByClassName("box")[0];
        abox.classList.remove("move");
        abox.classList.remove("move-ttb");
        abox.classList.toggle("move-ltr");
    }

    return (
        <div className="portfolio-container">
            <div className="box"></div>
            <button className='button button1' onClick={()=>ltr()}>LBT Minds</button>
            <button className='button button1' onClick={()=>ltr()}>ProcMart</button>
            <button className='button button1' onClick={()=>ltr()}>Accenture</button>
        </div>
    )
}

export default Portfolio 