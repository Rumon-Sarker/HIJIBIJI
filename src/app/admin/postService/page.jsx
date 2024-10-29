import React from 'react';
import PostService from './postService';
import DeleteFromAdmin from '@/components/DeleteFromAdmin';
import { PrismaClient } from '@prisma/client';
import { deleteService } from '@/controls/delete/delete';

const page = async () => {
  const prisma = new PrismaClient();
  const data = await prisma.services.findMany();
  const deleteFromServer = deleteService;
  return (
    <div>
      <PostService/>
      <DeleteFromAdmin data={data} deleteFromServer={deleteFromServer}/>
    </div>
  );
};

export default page;