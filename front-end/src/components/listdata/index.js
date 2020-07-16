import React,{useState, useEffect} from 'react';
import team_1 from '../../images/team-1-resize.jpg'
const ListData =(props)=>{
    
    const [active, setactive] = useState(1);
    useEffect(() => {
        return setactive(props.value)
          
    } )
    return(  
            <div className='row border-bottom'>
                <div className='col-12 col-md-6 col-lg-2 mt-2 '>
                   
                </div>
                <div className='col-12 col-md-6 col-lg-2 mt-2 '>
                    <img className='rounded-circle' src={team_1} alt=""/>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-2">
                        <ul class="doctor-info p-0 m-0">
                            <li><h3 class="d-flex doctor-name">PhD. Christinne Smith</h3></li>
                            <li><h5 class="d-flex"><span>Major :</span>Neurology</h5></li>
                            
                        </ul>  
                </div>
               
                <div class="col-12 col-md-6 col-lg-4 mt-5 float-lg-right">
                    <button className='button gradient-bg'>Book Appointment Now !</button>
                </div>
              

            </div>
    )

    
}
export default ListData