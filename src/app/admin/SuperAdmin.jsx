'use server'
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';


const SuperAdmin = async ({ children }) => {
    const session = await getServerSession(authOptions);


    if (session?.user?.role !== 'SUPER_ADMIN') {
        return <div className='flex justify-center items-center h-screen text-error text-2xl'>
        <h1>Your are not Authorized to view this</h1>
    </div>;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default SuperAdmin;