import React from 'react';
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import WhatWeDo from '../components/WhatWeDo';
import SEOcomponents from "../components/SEOcomponents";


const OurServices = () => {
  return (
    <>
      <SEOcomponents page="ourservices" />
      <Header title={'Our Services'} />
      <WhatWeDo />
      <Quotes />
    </>
  );
};

export default OurServices;
