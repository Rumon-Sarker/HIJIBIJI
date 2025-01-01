import React from 'react';
import RegisterPage from './RegisterPage';
import SuperAdmin from '../SuperAdmin';

const page = () => {
  return (
   <SuperAdmin>
     <div>
      <RegisterPage/>
    </div>
   </SuperAdmin>
  );
};

export default page;