import React from 'react';
import logo from '../../images/logo.png'
export const  Footer = ()=> {
  // Declare a new state variable, which we'll call "count"


  return (
    <footer class="site-footer">
        <div class="footer-widgets">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="foot-about">
                            <h2><a href="#"><img src={logo} alt=""/></a></h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>

                            <p class="copyright">
Copyright &copy; Thesis team-2020
 </p>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                        <div class="foot-contact">
                            <h2>Contact</h2>

                            <ul class="p-0 m-0">
                                <li><span>Addtress:</span>268 Lý Thường Kiệt, Q10, Tp.HCM</li>
                                <li><span>Phone:</span>+84 123455678</li>
                                <li><span>Email:</span>yourmail@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                        <div class="foot-links">
                            <h2>Usefull Links</h2>

                            <ul class="p-0 m-0">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="#">Doctor</a></li>
                                <li><a href="contact.html">Hospital</a></li>
                                <li><a href="services.html">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}
