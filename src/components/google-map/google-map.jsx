import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const GoogleMap = () => {
  return (
    <div 
      data-aos="fade-left"
      data-aos-duration="2000"
    >GoogleMap</div>
  )
}

export default GoogleMap