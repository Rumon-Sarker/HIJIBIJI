import React from 'react';
import FooterDetails from './Wrapper';
import { PrismaClient } from '@prisma/client';

const page = async() => {
    const prisma = new PrismaClient();
    const data = await prisma.footerDescription.findMany();
    return (
        <div>
            <FooterDetails data={data}/>
        </div>
    );
};

export default page;