import React from 'react';
import PropTypes from 'prop-types';
import BlogPicture1 from '../assets/BlogPicture1.png';
import BlogPicture2 from '../assets/BlogPicture2.png';
import BlogPicture3 from '../assets/BlogPicture3.png';
import BlogPeople1 from '../assets/BlogPeople1.png';
import BlogPeople2 from '../assets/BlogPeople2.png';
import BlogPeople3 from '../assets/BlogPeople3.png';

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
            <img src={authorImage} alt={author} className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium text-gray-700">{author}</span>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

// PropTypes for BlogPostCard2
BlogPostCard2.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

const BlogCstm = () => {
  const BlogPostsCard2 = [
    {
      image: BlogPicture1,
      date: 'May 4th, 2022',
      title: 'The most Popular Business Of the Year',
      author: 'Ranold Jeff.',
      authorImage: BlogPeople1,
    },
    {
      image: BlogPicture2,
      date: 'Apr 27th, 2022',
      title: 'The most Popular Business Of the Year',
      author: 'Patricia Anderson',
      authorImage: BlogPeople2,
    },
    {
      image: BlogPicture3,
      date: 'Apr 20th, 2022',
      title: 'The most Popular Business Of the Year',
      author: 'Elaine Luna',
      authorImage: BlogPeople3,
    },
  ];

  return (
    <div>
      {/* Bottom Section */}
      <div className="bg-offwhite py-10">
        <div className="text-center my-5">
          <h1 className="font-bold text-2xl text-peachred">\ Our Blog \</h1>
          <h2 className="font-bold text-4xl mt-1 text-darkblue">Latest Post</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
          {BlogPostsCard2.map((post, index) => (
            <BlogPostCard2
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              author={post.author}
              authorImage={post.authorImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCstm;
