import Swal from "sweetalert2"
import {createSlice} from '@reduxjs/toolkit'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 

const alert = createSlice({
    name:'alert',
    initialState :{ type: '',message: ''},
    reducers:{
        alertFire(state,action){
          
            switch (action.payload.type) {
                case "SUCCESS":
                    Toast.fire({
                        icon: 'success',
                        title: action.payload.message
                      })
                    break;
                case "ERROR":
                    Toast.fire({
                        icon: 'error',
                        title: action.payload.message
                      })
                    break;
                case "WARNING":
                    Toast.fire({
                        icon: 'warning',
                        title: action.payload.message
                      })
                    break;   
                case "INFO":
                    Toast.fire({
                        icon: 'info',
                        title: action.payload.message
                      })
                    break;  
                case "QUESTION":
                    Toast.fire({
                        icon: 'question',
                        title: action.payload.message
                      })
                    break;       
                default:
                    break;
            }
            setInterval(function(){ action.payload.history.push('/notfound') }, 3000);

            
        }
    }
})

const actions  = alert.actions;
export const {alertFire} = actions;
export default alert.reducer