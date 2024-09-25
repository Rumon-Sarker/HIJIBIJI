import React from 'react';
import Banner from './home/Banner';
import OurPartner from './home/OurPartners'
import ContactForm from './home/ContactForm'
import Blog from './../app/home/Blog'
import CaseStudyCaro from './../app/home/CaseStudyCaro'
const Home = () => {
  return (
    <div>
      <Banner/>
      <OurPartner/>
      <CaseStudyCaro/>
      <Blog/>
      <ContactForm/>
    </div>
  );
};

export default Home;