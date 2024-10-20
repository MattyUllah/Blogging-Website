import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCards = ({ blogs }) => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate('/blog-details', { state: blog });
  };

  return (
    <>
    <h2 className="text-xl font-bold mt-6 text-center bg-blue-500 text-white"> Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
        
      {blogs.map((blog, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
          <img src={blog.image} alt="Blog" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{blog.heading}</h3>
            <p className="text-gray-600 truncate">{blog.description}</p>
            <button 
              className="text-blue-500 mt-2"
              onClick={() => handleReadMore(blog)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
  
};

export default BlogCards;
