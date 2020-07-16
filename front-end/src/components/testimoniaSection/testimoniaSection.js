import React from 'react'
import user1 from '../../images/user-1.jpg'
const TestimoniaSection=()=>{
    return(
        <section class="testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Pacient’s Testimonials</h2>
                </div>
            </div>
        </div>

       
        <div class="testimonial-slider">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-9">
                        <div class="testimonial-bg-shape">
                            <div class="swiper-container testimonial-slider-wrap">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="entry-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo.</p>
                                        </div>

                                        <div class="entry-footer">
                                            <figure class="user-avatar">
                                                <img src={user1} alt=""/>
                                            </figure>

                                            <h3 class="testimonial-user">Russell Stephens <span>University in UK</span></h3>
                                        </div>
                                    </div>

                                    {/* <div class="swiper-slide">
                                        <div class="entry-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo.</p>
                                        </div>

                                        <div class="entry-footer">
                                            <figure class="user-avatar">
                                                <img src="images/user-2.jpg" alt=""/>
                                            </figure>

                                            <h3 class="testimonial-user">Russell Stephens <span>University in UK</span></h3>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="entry-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo.</p>
                                        </div>

                                        <div class="entry-footer">
                                            <figure class="user-avatar">
                                                <img src="images/user-3.jpg" alt=""/>
                                            </figure>

                                            <h3 class="testimonial-user">Russell Stephens <span>University in UK</span></h3>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="entry-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut augue finibus, luctus tortor at, ornare erat. Nulla facilisi. Sed est risus, laoreet et quam non, viverra accumsan leo.</p>
                                        </div>

                                        <div class="entry-footer">
                                            <figure class="user-avatar">
                                                <img src="images/user-4.jpg" alt=""/>
                                            </figure>

                                            <h3 class="testimonial-user">Russell Stephens <span>University in UK</span></h3>
                                        </div>
                                    </div>*/}
                                </div> 

                                {/* <div class="swiper-pagination-wrap">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="swiper-pagination position-relative flex justify-content-center align-items-center"></div>
                                            </div>
                                        </div>
                                    </div>                             
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default TestimoniaSection;
