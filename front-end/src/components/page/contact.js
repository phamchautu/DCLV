import React from 'react'
import Navbar from '../navbar/navbar'
import contact_bg from '../../images/contact-bg.png'
import emegencyCall from '../../images/emergency-call.png'
import Subcribe from '../subcribe/subcribe'
import { Footer } from '../footer/footer'
const Contact=()=>{
    return(
        <body className='single-page'>
            <header class="site-header">
            <Navbar />
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Contact</h1>

                    <div class="breadcrumbs">
                        <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="#">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img class="header-img" src={contact_bg} alt="" />
        </header>
        <div class="contact-page-short-boxes">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="contact-info h-100">
                        <h2 class="d-flex align-items-center">Contact Info</h2>

                        <ul class="p-0 m-0">
                            <li><span>Addtress:</span>Mitlton Str. 26-27 London UK</li>
                            <li><span>Phone:</span>+53 345 7953 32453</li>
                            <li><span>Email:</span>yourmail@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-4 mt-5 mt-lg-0">
                    <div class="opening-hours h-100">
                        <h2 class="d-flex align-items-center">Opening Hours</h2>

                        <ul class="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-4 mt-5 mt-lg-0">
                    <div class="emergency-box h-100">
                        <h2 class="d-flex align-items-center">Emergency</h2>

                        <div class="call-btn text-center">
                            <a class="d-flex justify-content-center align-items-center button gradient-bg" href="#"><img src={emegencyCall}/> +34 586 778 8892</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-form">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Get in Touch</h2>
                </div>

                <div class="col-12  col-md-4">
                    <input type="text" placeholder="Name"/>
                </div>

                <div class="col-12 col-md-4">
                    <input type="email" placeholder="E-mail"/>
                </div>

                <div class="col-12 col-md-4">
                    <input type="text" placeholder="Subject"/>
                </div>

                <div class="col-12">
                    <textarea name="name" rows="12" cols="80" placeholder="Message"></textarea>
                </div>

                <div class="col-12">
                    <input type="submit" name="" value="Send Message" class="button gradient-bg"/>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="contact-page-map">
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20B%C3%A1ch%20khoa%20-%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20gia%20TP.HCM,%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t,%20Qu%E1%BA%ADn%2010,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vi%E1%BB%87t%20Nam+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    {/* <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
                </div>
            </div>
        </div>
    </div>





        <Subcribe />
        <Footer />



        </body>
    )
}
export default Contact