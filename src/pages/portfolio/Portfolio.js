
import React from 'react';
import './portfolio.css';
import {Button} from 'react-bootstrap';

const data_set = [
    {
        id : 1,
        tech : "meteorjs",
        companies : ["procmart"],
        label : "Meteor JS",
        variant : "primary"
    },
    {
        id : 2,
        tech : "javascript",
        companies : ["procmart", "accenture"],
        label : "Java Script",
        variant : "secondary"
    },
    {
        id : 8,
        tech : "java",
        companies : ["lbt"],
        label : "Java",
        variant : "info"
    },
    {
        id : 3,
        tech : "mongodb",
        companies : ["procmart"],
        label : "Mongo DB",
        variant : "light"
    },
    {
        id : 4,
        tech : "materialize",
        companies : ["procmart"],
        label : "Materialize",
        variant : "info"
    },
    {
        id : 5,
        tech : "reactjs",
        companies : ["procmart", "accenture"],
        label : "React Js",
        variant : "danger"
    },
    {
        id : 6,
        tech : "aws",
        companies : ["procmart"],
        label : "AWS",
        variant : "secondary"
    },
    {
        id : 7,
        tech : "jenkins",
        companies : ["accenture"],
        label : "Jenkins",
        variant : "primary"
    },
    {
        id : 9,
        tech : "mysql",
        companies : ["lbt"],
        label : "MySQL",
        variant : "success"
    }
]

const Portfolio = ()=>{
    function moveDown(class_name){
        const items = document.getElementsByClassName("box")
        for(let item of items){
            item.classList.remove("move-ttb");
        }
        const company_tech = document.getElementsByClassName(class_name)
        for (let tech of company_tech) {
            tech.classList.toggle("move-ttb");
        }
    }

    return (
        <div className="portfolio-container">
            <br/>
            {
                data_set.map((data)=>{
                    let class_name = "box"
                    data.companies && data.companies.map((company)=>{
                        class_name = class_name + " " + company
                    })
                    return(
                        <span>
                            <Button id={data.id} className={class_name} variant={ data.variant }>{ data.label }</Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    )
                })
            }
            <div style={{marginTop : "25vh"}}>
                <button className='button button1' onClick={()=>moveDown("lbt")}>
                <span style={{fontSize : "20px"}}> LBT Minds </span> 
                    <hr/>
                <span>Nov (2016) - Jun (2017)</span>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='button button1' onClick={()=>moveDown("procmart")}>
                    <span style={{fontSize : "20px"}}> ProcMart</span> 
                    <hr/>
                <span>Nov (2017) - May (2021)</span>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='button button1' onClick={()=>moveDown("accenture")}>
                    <span style={{fontSize : "20px"}}> Accenture</span> 
                        <hr/>
                    <span>Jun (2021) - present</span>
                </button>
            </div>
        </div>
    )
}

export default Portfolio 