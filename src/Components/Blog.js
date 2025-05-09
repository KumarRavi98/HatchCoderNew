import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import BlogSidebar from './BlogSidebar';
import blogData from '../data/blogData';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 4;

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    setCurrentPage(1);
  };

  const filteredPosts = blogData.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="above-sp-blog"></div>

      <div className="container-blog">
        <div className='banner-blog'>
          <div className='content-div'>
            <h4>Our blog</h4>
            <h1>Blog Articles</h1>
            <div className='breadcrumb'>
              <a href="/" className="breadcrumb-link">Home&nbsp;&nbsp;</a> / <span>&nbsp;&nbsp;Our blog</span>
            </div>
          </div>
        </div>

        <div className='blogs-sec'>
          <div className='left-side'>
            {currentPosts.length === 0 ? (
              <p>No blog posts found for "{searchTerm}".</p>
            ) : (
              currentPosts.map(post => (
                <div className="blog-card" key={post.id}>
                  <Link to={`/blog/${post.id}`}>
                  <img src={post.image} alt={post.title} />
                  </Link>
                  <p className="blog-category">{post.category}</p>
                  <h3>{post.title}</h3>
                  <p className="blog-content">{post.content.slice(0, 80)}...</p>
                  <Link to={`/blog/${post.id}`}>
                    <button className="read-more">LEARN MORE</button>
                  </Link>
                </div>
              ))
            )}
          </div>

          <div className='right-side'>
          <BlogSidebar onSearch={handleSearch} blogData={blogData} />
          </div>
        </div>

        <div className="pagination">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx + 1)}
              className={currentPage === idx + 1 ? 'active' : ''}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
