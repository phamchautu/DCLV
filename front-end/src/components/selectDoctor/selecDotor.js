import React,{useState} from 'react'
import '../signin/signinStyle.css'
const SelectDoctor =()=>{
   const [SelectedDate, setSelectedDate] = useState('')
   
  
    return (
        console.log(SelectedDate),
        <div className='container mt-3'>
            <div className='row signin-division'>
                <div className='col '>
                    <div class="signin-box mt-3">
                            <h2 class="d-flex align-items-center">Account</h2>

                            <form class="d-flex flex-wrap justify-content-between">
                                
                                <input className='' type="text" placeholder="Input Your Name"/>
                                <select class="select-department ">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    
                                </select>
                                <input placeholder='Input your date of birth' type='text' onChange={e=>setSelectedDate(e.target.value)} onFocus={e =>e.target.type ='date'}/>
                                <input className='' type="number" placeholder="Input Your Phone Number"/>
                                <input className='w-100' type="text" placeholder="Input Your Address"/>
                                <input class="button gradient-bg mx-auto" type='button' value="Sign Up"/>
                            </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default SelectDoctor