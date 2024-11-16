import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Quotes from "../components/Quotes";

// Import images
import BlogPicture1 from "../assets/BlogPicture1.png";
import BlogPicture2 from "../assets/BlogPicture2.png";
import BlogPicture3 from "../assets/BlogPicture3.png";
import BlogPeople1 from "../assets/BlogPeople1.png";
import BlogPeople2 from "../assets/BlogPeople2.png";
import BlogPeople3 from "../assets/BlogPeople3.png";

const BlogPostCard = ({
  id,
  image,
  date,
  title,
  author,
  readTime,
  isLarge,
  authorImage,
}) => {
  return (
    <Link
      to={`/blog/${id}`}
      className={`border border-[#FF3E5433] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ${
        isLarge ? "h-[480px]" : "h-[225px]"
      } w-full flex ${isLarge ? "flex-col" : "flex-row"} mb-4`}
    >
      <img
        src={image}
        alt="Blog"
        className={`${
          isLarge ? "w-full h-[300px]" : "w-[185px] h-[185px]"
        } rounded-lg object-cover ${
          isLarge ? "mb-3" : "mr-4"
        } hover:scale-105 transition-transform duration-300`}
      />
      <div className={`${isLarge ? "" : "flex flex-col justify-center"} flex-grow`}>
        <p className="text-gray-500 text-sm">{date}</p>
        <h2 className="text-lg font-semibold text-peachred mb-2">{title}</h2>
        <div className="flex items-center mt-10">
          <img
            src={authorImage}
            alt="Author"
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-gray-600 text-sm font-medium flex-grow">{author}</p>
          {readTime && <p className="text-gray-500 text-sm">{readTime}</p>}
        </div>
      </div>
    </Link>
  );
};

BlogPostCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  isLarge: PropTypes.bool.isRequired,
  authorImage: PropTypes.string.isRequired,
};

const BlogPostCard2 = ({ id, image, date, title, author, authorImage }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="border bg-white border-[#0E1F5133] rounded-lg p-6 w-full hover:shadow-lg transition-shadow duration-300"
    >
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
    </Link>
  );
};

BlogPostCard2.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

const Blog = () => {
  const BlogPosts = [
    {
      id: 1,
      image: BlogPicture1,
      date: "May 4th, 2022",
      title: "The most Popular Business Of the Year",
      author: "Ranold Jeff.",
      authorImage: BlogPeople1,
    },
    {
      id: 2,
      image: BlogPicture2,
      date: "Apr 27th, 2022",
      title: "The most Popular Business Of the Year",
      author: "Patricia Anderson",
      authorImage: BlogPeople2,
    },
    {
      id: 3,
      image: BlogPicture3,
      date: "Apr 20th, 2022",
      title: "The most Popular Business Of the Year",
      author: "Elaine Luna",
      authorImage: BlogPeople3,
    },
  ];

  return (
    <>
      <Header title={"Blog"} />
      <div className="py-24">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-peachred">\ Our Blog \</h1>
          <h2 className="font-bold text-4xl text-darkblue mb-10">Latest Post</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center px-4 md:px-8 lg:px-16">
          <div className="flex justify-center">
            <BlogPostCard
              id={1}
              image={BlogPicture1}
              date="May 4th, 2022"
              title="The most Popular Business Of the Year"
              author="Ranold Jeff."
              readTime="2 Min Read"
              isLarge={true}
              authorImage={BlogPeople1}
            />
          </div>
          <div className="space-y-2 flex flex-col justify-center">
            {BlogPosts.slice(1).map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                image={post.image}
                date={post.date}
                title={post.title}
                author={post.author}
                readTime="2 Min Read"
                isLarge={false}
                authorImage={post.authorImage}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-offwhite py-10">
        <div className="text-center my-5">
          <h1 className="font-bold text-2xl text-peachred">\ Our Blog \</h1>
          <h2 className="font-bold text-4xl mt-1 text-darkblue">Latest Post</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
          {BlogPosts.map((post) => (
            <BlogPostCard2
              key={post.id}
              id={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
              author={post.author}
              authorImage={post.authorImage}
            />
          ))}
        </div>
      </div>
      <Quotes />
    </>
  );
};

export default Blog;
