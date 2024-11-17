import React from 'react';
import Header from '../components/Header';
import GetInTouch from '../components/GetInTouch';
import Quotes from '../components/Quotes';
import SeoComponent from '../components/SEOcomponents';

const Contact = () => {
  return (
    <>
      <SeoComponent page="contact" />
      <Header title={'Contact'} />
      <GetInTouch />
      <Quotes />
    </>
  );
};

export default Contact;

