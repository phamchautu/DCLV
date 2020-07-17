import React,{useState} from 'react'
import { Steps, Divider, Button , message } from 'antd';
import 'antd/dist/antd.css'
import SignIn from '../signin';
import SelectDoctor from '../selectDoctor/selecDotor';
const { Step } = Steps;

const BookApp =()=>{
    const [currentStep, setcurrentStep] = useState(0);
    const next=()=>{
        setcurrentStep(currentStep+1);
    }
    const prev=()=>{
        setcurrentStep(currentStep-1);
    }
    return (
        <div className='container'>
            <Steps
                type="navigation"
                size="small"
                current={currentStep}
                className="site-navigation-steps"
                >        
                <Step
                    title="Select Doctor"
                   
                    
                />
                <Step
                    title="Select Date"
                   
                />
                <Step
                    title="Confirmation"
                   
                />
            </Steps>
            <div className="steps-content">
                { currentStep===0 && (
                    <SelectDoctor />
                )}
                { currentStep===1 && (
                    <SelectDoctor />
                )}
                { currentStep===2 && (
                    <SelectDoctor />
                )}
            </div>
            <div className="steps-action">
                <div className='row'>
                    {currentStep > 0 && (
                        <button className='button gradient-bg button-close mx-auto  mt-3' onClick={prev}>Prev </button>

                    )}
                    {currentStep < 2&& (
                        <button className='button gradient-bg mx-auto mt-3' onClick={next}>Next </button>
                    )}
                    {currentStep === 2 && (
                        <button className='button gradient-bg button-done mx-auto  mt-3'  data-dismiss='modal'> Done </button>
                    )}
                   
                 </div>
        </div>
 
        </div>
    )
}
export default BookApp