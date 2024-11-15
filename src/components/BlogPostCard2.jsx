import React from "react";
import PropTypes from "prop-types";

const BlogPostCard2 = ({ image, date, title, author, authorImage }) => {
  return (
    <div className="border bg-white border-[#0E1F5133] rounded-lg p-6 w-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-peachred font-semibold text-xl mb-2">{title}</h3>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <img
              src={authorImage}
              alt={author}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">{author}</span>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

BlogPostCard2.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default BlogPostCard2;
