import React from 'react';
import NavBar from './NavBar';
import {getServerSession} from 'next-auth';

const NavWrapper = async () => {
    const session = await getServerSession()
    
    return (
        <div>
            <NavBar session={session}/>
        </div>
    );
};

export default NavWrapper;