import React from 'react';
import Banner from './home/Banner';
import OurPartner from './home/OurPartners'
import ContactForm from './home/ContactForm'

const Home = () => {
  return (
    <div>
      <Banner/>
      <OurPartner/>
      <ContactForm/>
    </div>
  );
};

export default Home;