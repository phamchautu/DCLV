import counterReducer from './counterSlice'
import alertReducer from './alertSlice'
const rootReducer ={
    count : counterReducer,
    alert : alertReducer
}

export default  rootReducer;
