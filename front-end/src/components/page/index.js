import React from 'react';
import IndexHeader from '../header/indexHeader'
import HomepageBox from '../hompageBoxes/homepageBoxes';
import OurDepartment from '../ourDepartment/ourDepartment';
import '../../css/style.css'
import '../../css/swiper.min.css'
import '../../css/swiper.css'
import TestimoniaSection from '../testimoniaSection/testimoniaSection';
import News from '../news/news';
import Subcribe from '../subcribe/subcribe';
import { Footer } from '../footer/footer';
// import '../../css/style.css'
const  Index = ()=> {
  // Declare a new state variable, which we'll call "count"


  return (
    <body>
      <IndexHeader />
      <HomepageBox />
      <OurDepartment />
      <TestimoniaSection />
      <News />
      <Subcribe />
      <Footer />
    </body>
  );
}
export default Index
