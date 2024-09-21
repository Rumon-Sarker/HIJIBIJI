import React from 'react';
import BlogDataCard from './BlogDataCard';

const BlogData = ({cardData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-16 mx-2 md:mx-5  min-h-screen content-center'>
            {/* { */}
                <BlogDataCard/>
                <BlogDataCard/>
                <BlogDataCard/>
            
            {/* } */}
        </div>
    );
};

export default BlogData;