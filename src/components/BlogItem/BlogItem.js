import React from 'react';
import './BlogItem.scss';

const BlogItem = ({blog}) => {
  const { title, image, totalComment, date} = blog;
  return (
    <div className="blog_item">
      <img src={image} alt={title}/>
      <p className="blog_item_title">{title}</p>
      <div className="blog_item_footer">
        <span>
          <i class="far fa-calendar-alt"></i> 
          {" "}{date}
        </span>
        <span> 
          <i class="far fa-comment-alt"></i>
          {" "}{totalComment}
        </span>
      </div>
    </div>
  );
};

export default BlogItem;