import React from 'react'
import Navbar from '../navbar/navbar'
import service_bg from '../../images/service-bg.png'
import Subcribe from '../subcribe/subcribe'
import { Footer } from '../footer/footer'
import ListData from '../listdata'
const Doctors =()=>{
    const array=[1,2,3,4,5,6,7,8,9,10,11,12]
    return(
        <body className='single-page'>
            <header class="site-header">
                <Navbar />
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>Doctors</h1>

                            <div class="breadcrumbs">
                                <ul class="d-flex flex-wrap align-items-center p-0 m-0">
                                    <li><a href="#">Home</a></li>
                                    <li>Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <img class="header-img" src={service_bg} alt=""></img>
            </header>


            <div class="container my-5">
                <div class="row my-5">
                        <div class="opening-hours w-100">
                            <h2 class="d-flex align-items-center">Our Best Doctors</h2>
                            {array.map(item =>
                                <ListData />    
                            )}
                        </div>  
                </div>
            </div>

        <Subcribe />
        <Footer />
        </body>
    )
}
export default Doctors