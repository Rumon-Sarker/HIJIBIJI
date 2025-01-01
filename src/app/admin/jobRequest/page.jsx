import React from 'react';
import JobRequest from './JobRequest';
import Admin from '../Admin';

const page = () => {
  return (
    <Admin>
      <div>
        <JobRequest />
      </div>
    </Admin>
  );
};

export default page;