import React from 'react';
import SuperAdmin from '../SuperAdmin';
import AdminPage from './AdminPage';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const AdminControl = async () => {
    const prisma = new PrismaClient();
    const data = await prisma.user.findMany();
    const session = await getServerSession(authOptions);
    return (

        <SuperAdmin>
            <div>
                <AdminPage session={session} data={data} />
            </div>
        </SuperAdmin>

    );
};

export default AdminControl;