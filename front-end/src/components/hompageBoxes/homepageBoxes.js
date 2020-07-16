import React,{useState} from 'react'
import emergencyCall from '../../images/emergency-call.png'
import { Steps, Button, message } from 'antd';
const { Step } = Steps;

const HomepageBox =() =>{
    const steps = [
        {
          title: 'Validation'
        },
        {
          title: 'Infomation'
          
        },
        {
          title: 'Select Appoitment'
          
        },
        {
          title: 'Overview'
          
        }
      ];
    const [currentStep, setcurrentStep] = useState(0)
    const handleNext =()=>{
        setcurrentStep(currentStep+1)

    }
    const handlePrev=()=>{  
        setcurrentStep(currentStep -1)
    }
    return (
    <div class="homepage-boxes">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="opening-hours">
                        <h2 class="d-flex align-items-center">Opening Hours</h2>

                        <ul class="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <div class="emergency-box">
                        <h2 class="d-flex align-items-center">Emergency</h2>

                        <div class="call-btn button gradient-bg">
                            <a class="d-flex justify-content-center align-items-center" href="#"><img src={emergencyCall} /> +34 586 778 8892</a>
                        </div>

                        <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
                    <div class="appointment-box">
                        <h2 class="d-flex align-items-center">Make an Appointment</h2>
                        <div className='d-flex flex-wrap justify-content-between mt-4' >
                            <button type='button' className="button gradient-bg  mr-2">Login</button>
                            <p className='mt-3 mr-2'>Or</p>
                            
                            <input type="number"  className='mt-2' placeholder="Input your phone number" />
                            <p className='mt-3 mr-2 w-100 text-center mb-1'>Before</p>
                            <button class='button gradient-bg w-100 mt-2'  data-toggle="modal" data-target="#appointmentModalCenter"  >
                                Book Appointment   
                            </button>

                            <div class="modal fade" id="appointmentModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header  gradient-bg">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Booking Appoitment</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <Steps current={currentStep}>
                                                {steps.map(item => 
                                                    <Step key={item.index} title={item.title}  />
                                                )}
                                                
                                            </Steps>

                                            <div className="steps-content mt-3">
                                                {currentStep === 0 && (
                                                    <p>0 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>
                                                )}
                                                {currentStep === 1 && (
                                                    <p>1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>
                                                )}
                                                {currentStep === 2 && (
                                                    <p>2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>
                                                )}
                                                {currentStep === 3 && (
                                                    <p>3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>
                                                )}
                                                </div>
                                            <div className="steps-action">
                                                {currentStep < steps.length - 1 && (
                                                    <Button type="primary"  onClick={handleNext}>
                                                        Next
                                                    </Button>
                                                )}
                                                {currentStep === steps.length - 1 && (
                                                    <Button type="primary" 
                                                       
                                                        onClick={() => message.success('Processing complete!')}
                                                        data-dismiss="modal"
                                                        >
                                                        Done
                                                    </Button>
                                                )}
                                                {currentStep > 0 && (
                                                    <Button  style={{ margin: '0 8px' }} onClick={handlePrev} >
                                                        Previous
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="button gradient-bg button-close" data-dismiss="modal">Close</button>
                                            <button type="button" class="button gradient-bg">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}
export default HomepageBox