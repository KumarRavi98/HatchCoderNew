import React, { useState } from 'react';

function BlogSidebar({ onSearch, blogData = [] }) {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (typeof onSearch === 'function') {
      onSearch(term);
    }
  };

  // ✅ Get latest 3 posts
  const latestPosts = [...blogData].slice(-3).reverse();

  return (
    <div className="sidebar">
      <div className="sidebar-section search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={term}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearchClick}>
          SEARCH
        </button>
      </div>

      <div className="sidebar-section latest-posts">
        <h3>Latest Posts</h3>
        {latestPosts.length > 0 ? (
          latestPosts.map((post) => (
            <div className="post-item" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div>
                <p className="post-title">{post.title}</p>
                <span className="post-category">{post.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No latest posts available.</p>
        )}
      </div>

      <div className="sidebar-section tags-box">
        <h3>Tags</h3>
        <div className="tags">
          {['Web', 'Agency', 'Company', 'Creative', 'Html', 'Marketing', 'Social Media', 'Branding'].map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
