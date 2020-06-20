import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './components/counterSlice'
import { Switch , Route } from 'react-router-dom'
import Datlichkham from './components/bookAppointmentSteps'
function App() {
    // const count = useSelector(state => state.count);
    // console.log(count)
    // const dispatch = useDispatch();
    return (


      <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/datlichkham">
          <Datlichkham />
        </Route>

      </Switch>
    </div>

    )
}

export default App;
