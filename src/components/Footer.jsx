import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaReact, FaWordpress, FaWix } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-darkblue text-offwhite px-20 py-10 flex justify-around">
      {/* About Us Section */}
      <div className="flex flex-col items-start max-w-xs">
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <div className="w-8 h-1 bg-peachred mb-4"></div>
        <p className="text-sm mb-6 mt-1">It is a long established <br /> fact that a reader will be distracted <br /> by the readable content of a page <br /> when looking at.</p>
        <div className="flex justify-center space-x-6 mt-9">
          <div className="bg-offwhite p-2 rounded-lg text-peachred">
            <FaLinkedinIn size={20} />
          </div>
          <div className="bg-offwhite p-2 rounded-lg text-peachred">
            <FaInstagram size={20} />
          </div>
          <div className="bg-offwhite p-2 rounded-lg text-peachred">
            <FaFacebookF size={20} />
          </div>
          <div className="bg-offwhite p-2 rounded-lg text-peachred">
            <FaTwitter size={20} />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col items-start max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Services</h2>
        <div className="w-8 h-1 bg-peachred mb-4"></div>
        <ul className="space-y-2 text-sm">
          <li className='pt-1'>Web Design/Development</li>
          <li className='pt-1'>App Development</li>
          <li className='pt-1'>UI/UX Design</li>
          <li className='pt-1'>HubSpot Integration</li>
          <li className='pt-1'>Email Marketing</li>
          <li className='pt-1'>Website Migration</li>
        </ul>
      </div>

      {/* Career Section */}
      <div className="flex flex-col items-start max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Career</h2>
        <div className="w-8 h-1 bg-peachred mb-4"></div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-offwhite p-2 rounded-lg text-peachred">
              <FaReact size={30} />
            </div>
            <div>
              <h3 className="text-peachred font-bold ml-3">ReactJs Dev.</h3>
              <p className="text-sm ml-3">1-5 Years of Exp.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-offwhite p-2 rounded-lg text-peachred">
              <FaWordpress size={30} />
            </div>
            <div>
              <h3 className="text-peachred font-bold ml-3">WordPress Dev.</h3>
              <p className="text-sm ml-3">1-5 Years of Exp.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-offwhite p-2 rounded-lg text-peachred">
              <FaWix size={30} />
            </div>
            <div>
              <h3 className="text-peachred font-bold ml-3">Python Developer</h3>
              <p className="text-sm ml-3">1-5 Years of Exp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="flex flex-col items-start max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Subscribe Us</h2>
        <div className="w-8 h-1 bg-peachred mb-4"></div>
        <p className="text-sm mb-6">It is a long established <br /> fact that a reader will be <br /> distracted by the readable</p>
        <form className="flex w-full space-x-2 rounded-lg">
          <input type="email" placeholder="Email" className="p-2 rounded w-full" />
        </form>
        <button className="bg-peachred text-white px-4 py-2 rounded-lg mt-3 ml-28">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
