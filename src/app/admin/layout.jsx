import React from 'react';

const AdminLayout = ({children}) => {
    return (
        <div>
            <h1 className='text-main text-3xl text-center'>admin layout</h1>
            {children}
        </div>
    );
};

export default AdminLayout;