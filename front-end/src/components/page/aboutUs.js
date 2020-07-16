import React from 'react';
import Navbar from '../navbar/navbar';
import Subcribe from '../subcribe/subcribe';
import { Footer } from '../footer/footer';
import about_bg from '../../images/news-bg.png'
import about from '../../images/about.jpg'
import cardiogram_2 from '../../images/cardiogram-2.png'
import hospital from '../../images/hospital.png'
import team_1 from '../../images/team-1.jpg'
import team_2 from '../../images/team-2.jpg'
import team_3 from '../../images/team-3.jpg'
import team_4 from '../../images/team-4.jpg'
const AboutUs =()=>{
    return (
    <body class="single-page"> 
        <header class="site-header">
            
            <Navbar />
                            

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>About us</h1>

                        <div class="breadcrumbs">
                            <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                                <li><a href="#">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <img class="header-img" src={about_bg} alt=""/>
        </header>

        <div class="med-history">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-12 col-lg-6">
                        <h2>Us History</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. </p>

                        <a class="d-inline-block button gradient-bg" href="#">Read More</a>
                    </div>

                    <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                        <img class="responsive" src={about} alt=""/>
                    </div>
                </div>
            </div>
        </div>

        <div class="faq-stuff">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Faq & Stuff</h2>
                    </div>

                    <div class="col-12 col-lg-6 mb-5 mb-lg-0">
                        <div class="accordion-wrap type-accordion">
                            <h3 class="entry-title d-flex justify-content-between align-items-center active">Elit mir congue ligula et efficitur pellentesqu<span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>

                            <h3 class="entry-title d-flex justify-content-between align-items-center">Pulvinar elit mi. Integer congue ligula et efficitur <span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>

                            <h3 class="entry-title d-flex justify-content-between align-items-center">Pellentesque pulvinar elit mi. Integer congue<span class="arrow-r"></span></h3>

                            <div class="entry-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="professional-box">
                                    <h2 class="d-flex align-items-center">Professional</h2>

                                    <img src={cardiogram_2} alt=""/>

                                    <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                </div>
                            </div>

                            <div class="col-12 col-md-6">
                                <div class="quality-box">
                                    <h2 class="d-flex align-items-center">Quality</h2>

                                    <img src={hospital} alt=""/>

                                    <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="medical-team">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>The Medical Team</h2>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="medical-team-wrap">
                            <img src={team_1} alt=""/>

                            <h4>Christinne Smith</h4>
                            <h5>PHD Surgeon</h5>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                        <div class="medical-team-wrap">
                            <img src={team_2} alt=""/>

                            <h4>Anna Gustav</h4>
                            <h5>PHD Surgeon</h5>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                        <div class="medical-team-wrap">
                            <img src={team_3} alt=""/>

                            <h4>Phillip Williams</h4>
                            <h5>PHD Surgeon</h5>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                        <div class="medical-team-wrap">
                            <img src={team_4} alt=""/>

                            <h4>Gina James</h4>
                            <h5>PHD Surgeon</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Subcribe />
        <Footer />
    </body>
   
  

    )
}
export default AboutUs 