import counterReducer from '../components/counterSlice'
const rootReducer ={
    count : counterReducer
} 
console.log(rootReducer);

export default  rootReducer;