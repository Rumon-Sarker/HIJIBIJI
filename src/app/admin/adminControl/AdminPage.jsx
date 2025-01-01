'use client'
import { updateAdminRole,deleteUser } from '@/controls/creator/creator';
import React, { useTransition } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AdminPage = ({data}) => {
    const [isPending, startTransition] = useTransition();

    const updateAdmin = (id,role) => {
        startTransition(async () => {
            try {
              await updateAdminRole(id,role);
              toast.success(`Role updated successfully!`);
            } catch (error) {
              console.error(error);
              toast.error("Failed to update  Role");
            }
          });
    }
    const handleDeleteUser = (id) => {
        startTransition(async () => {
            try {
              await deleteUser(id);
              toast.success(`User deleted successfully!`);
            } catch (error) {
              console.error(error);
              toast.error("Failed to delete user");
            }
          });
    }
    return (
        <div>
            <Toaster/>
            <h1 className='text-center text-4xl text-main my-16'>Admin Controller Page</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10 mx-5 content-center'>
                {
                    data?.map((item, index) => {
                        return (
                            <div className='p-5 shadow-xl rounded-lg space-y-3 flex flex-col border border-main' key={index}>
                                <h2 className='text-2xl text-main'>{item.name}</h2>
                                <p>Email: {item.email}</p>
                                <p className='text-lg'>Role: <span className='text-accent'> {item.role}</span></p>
                                <button className='btn btn-success' disabled={isPending} onClick={() => updateAdmin(item.id,'ADMIN')}>Make Admin</button>
                                <button className='btn btn-accent' disabled={isPending} onClick={() => updateAdmin(item.id,'SEMI_ADMIN')}>Remove from Admin</button>
                                <button className='btn btn-error' disabled={isPending} onClick={() =>handleDeleteUser(item.id)}>Delete User</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AdminPage;