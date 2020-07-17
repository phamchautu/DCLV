import React,{useState} from 'react'
import './signinStyle.css'
const SignIn =()=>{
    const [waittingCode, setwaittingCode] = useState(false);
    const handleVerifyCode =()=>{
        setwaittingCode(true)
    }
    return (
        <div className='container'>
            <div className='row signin-division'>
                <div className='col border-right'>
                    <div class="signin-box mt-3">
                            <h2 class="d-flex align-items-center">Account</h2>

                            <form class="d-flex flex-wrap justify-content-between">


                                <input className='w-100' type="text" placeholder="Input User name"/>

                                <input className='w-100'  type="password" placeholder="Input password"/>

                                <input class="button gradient-bg mx-auto" type='button' value="Login"/>
                            </form>
                    </div>
                </div>
                <div className='col-lg-2 text-center mt-5'>Or</div>
                <div className ='col border-left'>
                    <div class="signin-box mt-3">
                            <h2 class="d-flex align-items-center">Phone Number</h2>

                            <form class="d-flex flex-wrap justify-content-between">
                                { waittingCode === false &&(
                                    <div className='w-100'>
                                        <input className='w-100' type="number" placeholder="Input Your Phone Number"/>
                                        <input class="button gradient-bg mx-auto" type='button' onClick={handleVerifyCode} value="Get Verify Code"/>
                                    </div>
                                )}
                                { waittingCode === true &&(
                                    <div className='w-100'>
                                        <input className='w-100' type="text" placeholder="Input Your Verify Code"/>
                                        <input class="button gradient-bg mx-auto" type='button' value="Verify Code"/>
                                    </div>
                                )}
                            </form>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default SignIn