import React, { Component } from 'react';

class BlogPreview extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // };

  render() {
    return (
      <div className="std-land-section" id='blog-preview'>
        <h3 className='land-title'>BLOG</h3>

        <div className='row'>
          <div className='col-sm-4'>
            <img className='blog-pic' src='img/white-placeholder.png' alt='sub-mission-1'/>
          </div>
          <div className='col-sm-4'>
            <p className='blog-title'>CATEGORIES</p>
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
          <div className='col-sm-4'>
            <p className='blog-title'>RECENT POSTS</p>
            <ul>
              <li>Recent Post 1</li>
              <li>Recent Post 2</li>
              <li>Recent Post 3</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPreview;
