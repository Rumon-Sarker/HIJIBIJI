'use server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const Admin = async ({ children }) => {
    const session = await getServerSession(authOptions);

    // Deny access if the role is neither ADMIN nor SUPER_ADMIN
    if (!session || (session?.user?.role !== 'ADMIN' && session?.user?.role !== 'SUPER_ADMIN')) {
        return (
            <div className="flex justify-center items-center h-screen text-error text-2xl">
                <h1>You are not Authorized to view this page</h1>
            </div>
        );
    }

    // Render children for authorized users
    return (
        <div>
            {children}
        </div>
    );
};

export default Admin;
