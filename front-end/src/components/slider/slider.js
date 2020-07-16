import React from 'react';
// import '../../css/style.css';
import hero from '../../images/hero.jpg';
const Slider =()=>{
    return (
        <div class="swiper-container hero-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide hero-content-wrap" style={{ backgroundImage : `url(${hero})` }}>
                    <div class="hero-content-overlay position-absolute w-100 h-100">
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header class="entry-header">
                                        <h1>The Best {'\n'}Medical Services</h1>
                                    </header>

                                    <div class="entry-content mt-4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                    </div>

                                    <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                        <a href="#" class="button gradient-bg">Read More</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* {{<div class="swiper-slide hero-content-wrap" style={{ backgroundImage : `url(${hero})` }}>
                    <div class="hero-content-overlay position-absolute w-100 h-100">
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header class="entry-header">
                                        <h1>The Best {'\n'} Medical Services</h1>
                                    </header>

                                    <div class="entry-content mt-4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                    </div>

                                    <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                        <a href="#" class="button gradient-bg">Read More</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide hero-content-wrap" style={{ backgroundImage : `url(${hero})` }}>
                    <div class="hero-content-overlay position-absolute w-100 h-100">
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                    <header class="entry-header">
                                        <h1>The Best {'\n'} Medical Services</h1>
                                    </header>

                                    <div class="entry-content mt-4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                                    </div>

                                    <footer class="entry-footer d-flex flex-wrap align-items-center mt-4">
                                        <a href="#" class="button gradient-bg">Read More</a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }} */}
        </div>
            <div class="icons-wrap-left position-absolute w-100">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <div class="icons-wrap-right position-absolute w-100 mr-0">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>

        </div>  
    )
}
export default Slider