import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const { image, heading, description } = location.state;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <img src={image} alt="Blog" className="w-full max-w-lg object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-4 text-center">{heading}</h1>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
};

export default BlogDetails;
