// App.js yoki boshqa bir komponent fayli

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../about/about';

// GSAP ScrollTrigger ni o'rnatish
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Elementni GSAP orqali animatsiyalash
    gsap.from(elementRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%', // Element ekran ostida paydo bo'lishi
        end: '+=300', // Element animatsiya tugashi uchun ko'rsatish
        toggleActions: 'play none none none', // animatsiya boshlanishi va tugash soatlari
      },
    });
  }, []); // useEffect dan foydalanishda o'zgartirishlarga qo'yilgan bog'lam

  return (
    <div>
      {/* Animatsiya boshlanadigan element */}
      <div
        ref={elementRef}
        >
          <About/>
      </div>
      {/* Boshqa elementlar */}
    </div>
  );
};

export default Blog;
