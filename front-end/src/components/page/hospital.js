import React from 'react'
import Navbar from '../navbar/navbar'
import about_bg from '../../images/about-bg.png'
import Subcribe from '../subcribe/subcribe'
import { Footer } from '../footer/footer'
const Hospital =()=>{
    return(
        <body className='single-page'>
        <header class="site-header">
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Hospitals</h1>

                        <div class="breadcrumbs">
                            <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                                <li><a href="#">Home</a></li>
                                <li>Hospitals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <img class="header-img" src={about_bg} alt=""></img>
        </header>

        <Subcribe />
        <Footer />
    </body>
    )
}
export default Hospital