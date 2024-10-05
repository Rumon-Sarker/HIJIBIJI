import React from 'react';
import CheckAdmin from '../checkAdmin/page';
import {getServerSession} from 'next-auth';
import {authOptions} from '../[...nextauth]/route';

const page = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div className='flex justify-center items-center'>
            <CheckAdmin session = {session}/>
        </div>
    );
};

export default page;