import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import Quotes from '../components/Quotes';
import SEOcomponents from "../components/SEOcomponents";


const About = () => {
  return (
    <>
      <SEOcomponents page="about" />
      <Header title={'About'} />
      <AboutUs />
      <Team />
      <Quotes />
    </>
  );
};

export default About;
