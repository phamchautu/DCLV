import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
import  NotFound  from './components/notFound/notFound';
import Index from './components/page';
import AboutUs from './components/page/aboutUs';
import Contact from './components/page/contact';
import Doctors from './components/page/doctors';
import Hospital from './components/page/hospital';
import ListData from './components/listdata';
function App() {
    // const count = useSelector(state => state.count);
    // console.log(count)
    // const dispatch = useDispatch();
    return (


      <div>
        <Switch>
          
        
          <Route exact path="/">
            <Index />
          </Route>
          <Route  path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/doctors" >
            <Doctors />
          </Route> 
          <Route path="/hospitals" >
            <Hospital />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>

          <Route path="/notfound" >
            <NotFound />
          </Route>
          <Route path="/book" >
            <ListData />
          </Route>
          <Redirect to='/' />
        </Switch>
    </div>

    )
}

export default App;
