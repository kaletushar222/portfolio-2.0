
import React from 'react';
import './contact.css';

const Contact = ()=>{
    return (
        <div className="contact-container">
            <br/>
            <h1 style={{color : "#fff"}}>Contact Me</h1>
            <ul className='social-ul'>
                <li className='google'>
                    <a target="_blank" href="mailto:kaletushar222@gamil.com">
                        <i className="fab fa-google" aria-hidden="true"></i>
                        <span> - G-Mail</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://stackoverflow.com/users/9134694/tushar-kale">
                        <i className="fab fa-stack-overflow" aria-hidden="true"></i>
                        <span> - Stack Overflow</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/kaletushar222">
                        <i className="fab fa-github" aria-hidden="true"></i>
                        <span> - Github</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://tusharkale.medium.com/">
                        <i className="fab fa-medium" aria-hidden="true"></i>
                        <span> - Medium</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://m.facebook.com/profile.php?id=100001975776173">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                    <span> - Facebook</span>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/t.u.s.h.a.r_k/">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <span> - Instagram</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact 