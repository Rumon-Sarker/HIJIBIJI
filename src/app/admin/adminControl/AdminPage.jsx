'use client';
import { updateAdminRole, deleteUser } from '@/controls/creator/creator';
import React, { useTransition, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import toast, { Toaster } from 'react-hot-toast';

const AdminPage = ({ data, session }) => {
 
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!session) {
      // Redirect or notify if session is invalidated
      toast.error("Your session has expired. Logging out...");
      signOut();
    }
  }, [session]);

  const updateAdmin = (id, role) => {
    startTransition(async () => {
      try {
        await updateAdminRole(id, role);
        toast.success(`Role updated successfully!`);
      } catch (error) {
        console.error(error);
        toast.error("Failed to update Role");
      }
    });
  };

  const handleDeleteUser = (id) => {
    startTransition(async () => {
      try {
        const response = await deleteUser(id);

        if (response.status === "success") {
          toast.success(`User deleted successfully!`);
        } else {
          toast.error(response.message || "Failed to delete user");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while deleting the user");
      }
    });
  };

  return (
    <div>
      <Toaster />
      <h1 className="text-center text-4xl text-main my-16">Admin Controller Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10 mx-5 content-center">
        {data?.map((item, index) => (
          <div className="p-5 shadow-xl rounded-lg space-y-3 flex flex-col border border-main" key={index}>
            <h2 className="text-2xl text-main">{item.name}</h2>
            <p>Email: {item.email}</p>
            <p className="text-lg">
              Role: <span className="text-accent">{item.role}</span>
            </p>

            <button
              className="btn btn-success"
              disabled={isPending || session?.user?.email === item?.email}
              onClick={() => updateAdmin(item.id, 'ADMIN')}
            >
              Make Admin
            </button>
            <button
              className="btn btn-accent"
              disabled={isPending || session?.user?.email === item?.email}
              onClick={() => updateAdmin(item.id, 'SEMI_ADMIN')}
            >
              Remove from Admin
            </button>
            <button
              className="btn btn-error"
              disabled={isPending || session?.user?.email === item?.email}
              onClick={() => handleDeleteUser(item.id)}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
