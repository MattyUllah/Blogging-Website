import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminBlogForm = ({ blogs, setBlogs }) => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = () => {
    if (heading && description && image) {
      const newBlog = { heading, description, image };
      setBlogs((prevBlogs) => {
        const updatedBlogs = [...prevBlogs, newBlog];
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); 
        return updatedBlogs;
      });
      setHeading('');
      setDescription('');
      setImage(null);
      navigate('/blogs');  
    }
  };

  const handleDeleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Blog Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <button onClick={handleAddBlog} className="bg-blue-500 text-white px-4 py-2">
        Submit Blog
      </button>

      <h2 className="text-xl font-bold mt-6 text-center bg-blue-500 text-white">Existing Blogs</h2>
      <table className="min-w-full border mt-4">
        <thead>
          <tr>
            <th className="border p-2">Blog No</th>
            <th className="border p-2">Blog Heading</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 text-center">{blog.heading}</td>
              <td className="border p-2 text-center">
                <button onClick={() => handleDeleteBlog(index)} className="bg-red-500 text-white px-2 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBlogForm;
