import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminBlogForm from './AdminBlogForm';
import BlogCards from './BlogCards';
import BlogDetails from './BlogDetails';

const App = () => {
  const [blogs, setBlogs] = useState([]);

 
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  
  useEffect(() => {
    if (blogs.length > 0) {
      localStorage.setItem('blogs', JSON.stringify(blogs));
    }
  }, [blogs]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminBlogForm blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs" element={<BlogCards blogs={blogs} />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
