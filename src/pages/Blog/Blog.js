import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './Blog.scss';

const Blog = ({ blogId }) => {
  return (
    <div className="blog-container">
      <Navigation />
      <Title>
        <FormattedMessage id="IDS_BLOG_PAGE_WITH_ID" values={{ blogId }} />
      </Title>
    </div>
  );
};

export default Blog;
