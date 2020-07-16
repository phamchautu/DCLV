import React from 'react';
import Navbar from '../navbar/navbar'
import Slider from '../slider/slider'
 const  IndexHeader = ()=> {
  // Declare a new state variable, which we'll call "count"


  return (
    <header className='site-header'>
      <Navbar />
      <Slider />
    </header>
  );
}
export default IndexHeader