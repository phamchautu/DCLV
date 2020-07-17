import React,{useState} from 'react';
import emergencyCall from '../../images/emergency-call.png' 
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
import { Steps, Button, message } from 'antd';
import 'antd/dist/antd.css';
import SignIn from '../signin';
import SignUp from '../signup';
import BookApp from '../bookApp/bookApp';
const { Step } = Steps;
// import '../../css/style.css'
// import './style.css'
const  Navbar=()=> {

   
    const [signed, setsigned] = useState(true);
    const [loginModal, setloginModal] =useState(0);
    const [userModal, setuserModal] =useState(0);

    const handleSelectSignIn=()=>{
        setloginModal(0)
    }
    const handleSelectSignUp=()=>{
        setloginModal(1)
    }
    const handleSelectBookApp=()=>{
        setuserModal(0)
    }
    const handleSelectAccount=()=>{
        setuserModal(1)
    }
    const handleSelectHistory=()=>{
        setuserModal(2)
    }



    return(
     
        <div class="nav-bar">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div class="site-branding d-flex align-items-center">
                           <a class="d-block" href="index.html" rel="home"><img class="d-block" src={logo} alt="logo" /></a>
                        </div>

                        <nav class="site-navigation d-flex justify-content-end align-items-center">
                            <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li class="current-menu-item"><Link to='/'>Home</Link></li>
                                <li><Link to='about-us'>About us</Link></li>
                                <li><Link to='doctors'>Doctor</Link></li>
                                <li><Link to="hospitals">Hospital</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                <li >
                                    <i class="fa fa-user"  data-toggle="modal" data-target="#userModalCenter"></i>
                                </li>
                                <li class="call-btn button gradient-bg mt-3 mt-md-0">
                                    <a className="d-flex justify-content-center align-items-center" href="#"><img src={emergencyCall} /> +34 586 778 8892</a>
                                </li>
                            </ul>
                        </nav>

                        <div class="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="userModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header border-0 ">
                                            <div className='d-flex w-100 '><h2 className='modal-title mx-auto' >Welcom to Website's name</h2></div>
                                            <button type="button" class="close ml-0" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body p-0 px-3">
                                                                                    {/*--------------- Not sign in yet-------------------- */}

                                        {
                                            signed ===false &&(
                                                <div className='row'>
                                                    <div className={`col login  ${loginModal ===0 ? 'active':''}`} onClick={handleSelectSignIn}>
                                                        <div className='d-flex justify-content-center align-items-center'>SIGN IN</div>
                                                    </div>
                                                    
                                                    <div className={`col login ${loginModal ===1 ? 'active':''}`} onClick={handleSelectSignUp}>
                                                        <div className='d-flex justify-content-center align-items-center'>SIGN UP</div>
                                                    </div>
                                                    <div className="steps-content m-3">
                                                        { loginModal === 0 &&(
                                                            <SignIn />
                                                        )}
                                                        { loginModal === 1 &&(
                                                            <SignUp />
                                                        )}
                                                    </div>
                                                </div>

                                        
                                            )}
                                             
                                             {/*---------------  signed-------------------- */}
                                             {  signed ===true && (
                                                 <>
                                                <div className='row'>
                                                    <div className={`col login  ${userModal ===0 ? 'active':''}`} onClick={handleSelectBookApp}>
                                                        <div className='d-flex justify-content-center align-items-center'>Book Appointment</div>
                                                    </div>
                                                    <div className={`col login  ${userModal ===1 ? 'active':''}`} onClick={handleSelectAccount}>
                                                        <div className='d-flex justify-content-center align-items-center'>Account</div>
                                                    </div>
                                                    <div className={`col login ${userModal ===2 ? 'active':''}`} onClick={handleSelectHistory}>
                                                        <div className='d-flex justify-content-center align-items-center'>History</div>
                                                    </div>
                                                    
                                                    </div>
                                                    <div className="steps-content m-3">
                                                        { userModal === 0 &&(
                                                            <BookApp />
                                                            )}
                                                        { userModal === 1 &&(
                                                            <SignIn />
                                                        )}
                                                         { userModal === 2 &&(
                                                            <SignIn />
                                                        )}
                                                </div>
                                                </>
                                            )}
                                        </div>
                                        <div class="modal-footer border-0">
                                            <button type="button" class="button gradient-bg button-close" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
        </div>

        
                              
  )
}
export default Navbar; 