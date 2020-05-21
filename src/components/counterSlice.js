import {createSlice} from '@reduxjs/toolkit'


const counter = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment (state, action){
        return action.payload + 1
      }
  }
  
})
const actions  = counter.actions;
console.log(counter)
export const {increment} = actions;
export default counter.reducer