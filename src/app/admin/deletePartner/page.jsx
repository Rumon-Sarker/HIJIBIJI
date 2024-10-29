import React from 'react';
import DeleteWrapper from './DeleteWrapper';
import { PrismaClient } from '@prisma/client';

const DeletePartner = async () => {
    const prisma = new PrismaClient();
    const data = await prisma.partners.findMany();
    return (
        <div>
            <DeleteWrapper data={data}/>
        </div>
    );
};

export default DeletePartner;