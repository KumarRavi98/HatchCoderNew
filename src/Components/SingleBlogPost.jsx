import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';
import Footer from './Footer';
import blogData from '../data/blogData';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogData.find(p => p.id === id);
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div className="loading">Loading post...</div>;
  }

  return (
    <>
    <div className='main-single-container'>
      <div className="above-sp-blog"></div>

      <div className='banner-blog'>
        <div className='content-div'>
          <h4>News details</h4>
          <h1>{post.title}</h1>
          <div className='breadcrumb'>
            <a href="/" className="breadcrumb-link">Home&nbsp;&nbsp;</a> / <span>&nbsp;&nbsp;News details</span>
          </div>
        </div>
      </div>

      <div className="single-blog-container">
        <div className="single-blog-left">
          <img src={post.image} alt={post.title} className="post-image" />
          <p className="blog-category">
            <img src="/Images/edit-Icon.svg" alt="icon" /> {post.category}
          </p>
          <h1>{post.title}</h1>
          <p className="blog-content">{post.content}</p>
        </div>

        <div className="single-blog-right">
          <BlogSidebar />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleBlogPost;
