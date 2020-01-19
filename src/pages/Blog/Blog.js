import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './Blog.scss';

const Blog = ({ blogId }) => {
  return (
    <div className="blog-container">
      <Navigation />
      <Title>{`Blog Page with id: ${blogId}`}</Title>
    </div>
  );
};

export default Blog;
