import React from 'react';
import Banner from './home/Banner';
import OurPartner from './home/OurPartners'
import ContactForm from './home/ContactForm'
import Blog from './../app/home/Blog'
const Home = () => {
  return (
    <div>
      <Banner/>
      <OurPartner/>
      <Blog/>
      <ContactForm/>
    </div>
  );
};

export default Home;