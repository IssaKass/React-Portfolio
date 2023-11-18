import React from "react";

const NewsBlogItem = ({ data }) => {
  return (
    <div className="news-blog">
      <img src={data.image} className="news-blog-image" />
      <div className="news-blog-content">
        <h3 className="news-blog-title">{data.title}</h3>
        <p className="news-blog-description">{data.description}</p>
      </div>
    </div>
  );
};

export default NewsBlogItem;
