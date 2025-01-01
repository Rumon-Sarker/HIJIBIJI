import React from 'react';
import SuperAdmin from '../SuperAdmin';
import AdminPage from './AdminPage';
import { PrismaClient } from '@prisma/client';

const AdminControl = async () => {
    const prisma = new PrismaClient();
    const data = await prisma.user.findMany();
    return (

        <SuperAdmin>
            <div>
                <AdminPage data={data} />
            </div>
        </SuperAdmin>

    );
};

export default AdminControl;