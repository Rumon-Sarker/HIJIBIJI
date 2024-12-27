'use client'
import { deleteTechnologyCategory } from '@/controls/delete/delete';
import { getTechnologyCategories } from '@/controls/fetchData/fetchData';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DeleteTechnologyCategory = () => {
    const [categories, setCategories] = useState([]);
     useEffect(() => {
          async function fetchCategories() {
            const categories = await getTechnologyCategories();
            setCategories(categories);
          }
          fetchCategories();
        }, []);
        
    const deleteCategory = async (categoryId) => {
        const res = await deleteTechnologyCategory(categoryId);
        if (res.status) {
            toast.success("Technology category has been deleted successfully!");
        }
        if (res.error){
            toast.error("Error deleting technology")
        }
    }
    return (
        <div className='my-20'>
            <h1 className='text-error text-3xl text-center my-5'>Delete technology Category</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10'>
                {
                    categories.map((category) => (
                        <div className='text-lg flex flex-col items-center' key={category.id}>
                            <p>{category.name}</p>
                            <button  className="btn bg-[#ff0000]  text-white hover:text-black hover:bg-[#be2d2d] btn-sm" onClick={() => deleteCategory(category.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DeleteTechnologyCategory;