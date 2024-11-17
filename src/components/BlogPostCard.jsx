import React from "react";
import PropTypes from "prop-types";

const BlogPostCard = ({
  image,
  date,
  title,
  author,
  readTime,
  isLarge,
  authorImage,
}) => {
  return (
    <div
      className={`border border-[#FF3E5433] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ${
        isLarge ? "h-[480px]" : "h-[225px]"
      } w-[554px] flex ${isLarge ? "flex-col" : "flex-row"} mb-4`}
    >
      <img
        src={image}
        alt="Blog"
        className={`${
          isLarge ? "w-[514px] h-[300px]" : "w-[185px] h-[185px]"
        } rounded-lg ${
          isLarge ? "mb-3" : "mr-4"
        } object-cover rounded-lg hover:scale-105 transition-transform duration-300`}
      />
      <div
        className={`${isLarge ? "" : "flex flex-col justify-center"} flex-grow`}
      >
        <p className="text-gray-500 text-sm">{date}</p>
        <h2 className="text-lg font-semibold text-peachred mb-2">{title}</h2>
        <div className="flex items-center mt-10">
          <img
            src={authorImage}
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-gray-600 text-sm font-medium flex-grow">
            {author}
          </p>
          <p className="text-gray-500 text-sm">{readTime}</p>
        </div>
      </div>
    </div>
  );
};

BlogPostCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  isLarge: PropTypes.bool.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default BlogPostCard;
