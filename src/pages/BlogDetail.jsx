import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Quotes from "../components/Quotes";
import SeoComponent from "../components/SEOcomponents";

// Import images
import BlogPicture1 from "../assets/BlogPicture1.png";
import BlogPicture2 from "../assets/BlogPicture2.png";
import BlogPicture3 from "../assets/BlogPicture3.png";
import BlogPeople1 from "../assets/BlogPeople1.png";
import BlogPeople2 from "../assets/BlogPeople2.png";
import BlogPeople3 from "../assets/BlogPeople3.png";

// Mock data (harus sinkron dengan Blog.jsx)
const BlogPosts = [
  {
    id: 1,
    image: BlogPicture1,
    title: "The most Popular Business Of the Year",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur nisi et libero ultrices, vitae laoreet massa gravida. Praesent a convallis erat. Ut at facilisis ipsum, vitae vestibulum quam.",
    date: "May 4th, 2022",
    author: "Ranold Jeff.",
    authorImage: BlogPeople1,
  },
  {
    id: 2,
    image: BlogPicture2,
    title: "How to Build a Thriving Startup",
    content:
      "Suspendisse potenti. Aenean tincidunt eros vitae dapibus pharetra. Integer volutpat, magna in malesuada tincidunt, ligula nunc fringilla justo, nec eleifend enim nulla ut purus.",
    date: "Apr 27th, 2022",
    author: "Patricia Anderson",
    authorImage: BlogPeople2,
  },
  {
    id: 3,
    image: BlogPicture3,
    title: "Innovative Strategies for Modern Businesses",
    content:
      "Duis ornare magna ac varius scelerisque. Morbi suscipit eros ut elit malesuada, eget consequat orci vehicula. Curabitur posuere lacus ac augue hendrerit, et gravida odio tempor.",
    date: "Apr 20th, 2022",
    author: "Elaine Luna",
    authorImage: BlogPeople3,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold text-peachred">
          Blog post not found
        </h1>
      </div>
    );
  }

  return (
    <>
    <SeoComponent page="blogdetail" />
      <Header title="Blog Detail" />
      <div className="py-10 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-darkblue mb-4">{blog.title}</h1>
        <p className="text-gray-500 text-sm">{blog.date}</p>
        <div className="mt-5">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-w-3xl mx-auto rounded-lg object-cover"
            style={{ maxHeight: "400px" }}
          />
          <p className="text-lg text-gray-700 mt-5 leading-relaxed">
            {blog.content}
          </p>
        </div>
        <div className="mt-8 flex items-center">
          <img
            src={blog.authorImage}
            alt={blog.author}
            className="w-12 h-12 rounded-full mr-4"
          />
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Author:</span> {blog.author}
          </p>
        </div>
      </div>
      <Quotes />
    </>
  );
};

export default BlogDetail;
