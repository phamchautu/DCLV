import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './components/counterSlice'
function App() {
    const count = useSelector(state => state.count);
    console.log(count)
    const dispatch = useDispatch();
    return (
      <div>
        <button onClick={()=> dispatch(increment(count))}>Add by</button>
        <p>{count}</p>
      </div>
    )
}

export default App;
