import React from 'react';
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import WhatWeDo from '../components/WhatWeDo';
import SeoComponent from '../components/SeoComponents';

const OurServices = () => {
  return (
    <>
      <SeoComponent page="ourservices" />
      <Header title={'Our Services'} />
      <WhatWeDo />
      <Quotes />
    </>
  );
};

export default OurServices;
