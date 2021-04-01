import React from 'react';
import './Blog.scss';
import { blogs } from '../../data.json';
import BlogItem from '../BlogItem/BlogItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Blog = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 3,
      partialVisibilityGutter: 30
    }
  };

  return (
    <div className="blog">
      <h3>LATEST BLOGS</h3>
      <strong>
      This is a place devoted to giving you deeper insight into the news, 
      <br/>
      trends, people and technology behind Bing.
      </strong>
      <div className="blog_container" style={{zIndex:"5"}}>
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={2}
        swipeable
        >
        {
          blogs.map((item, i) => <BlogItem blog={item} key={i}/> )
        }
        </Carousel>
      </div>
      <div className="circle_1" style={{zIndex:"1"}}></div>
      <div className="circle_2"></div>
    </div>
  );
};

export default Blog;