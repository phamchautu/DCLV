import React, { useState , useEffect } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const TimeSelect = (props)=>{
    const [options, setoptions] = useState([
        { value: '7:00', label: '7:00' },
        { value: '8:00', label: '8:00' },
        { value: '9:00', label: '9:00' },
        { value: '10:00' ,label: '10:00' } 
      ])
    const [selectedOption, setselectedOption] = useState({})
    const [selectedDate, setselectedDate] = useState('')
    const [toDate ] = useState(new Date())
    console.log(selectedDate);
    
    console.log(selectedOption);
    
    return(
        <div>
        <Calendar 
            onChange={setselectedDate}
            value={toDate}
        />
        <Select className="mt-4 col-md-6 col-offset-4"
            
            isClearable
            options = {options}
            isSearchable
            autoFocus={true}
            onChange = {setselectedOption}
        /> 
          </div>

    )
}

export default TimeSelect