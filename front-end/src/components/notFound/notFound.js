import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss'
import Navbar from '../navbar/navbar'
import about_bg from '../../images/about-bg.png'
import '../../css/style.css'
const NotFound=()=>{
    return(
        <body class="single-page">
             <header class="site-header">
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Not Found</h1>

                        <div class="breadcrumbs">
                            <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                                <li><Link to="/">Home</Link></li>
                                <li>Not Found</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <img class="header-img" src={about_bg} alt=""/>
        </header>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1><span>4</span><span>0</span><span>4</span></h1>
                    </div>
                    <h2>we are sorry, but the page you requested was not found</h2>
                </div>
            </div>
        </body>
    )
}
export default NotFound