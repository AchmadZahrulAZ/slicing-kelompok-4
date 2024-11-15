import React from 'react';
// Import icons from local assets
import FooterLinkedIn from '../assets/FooterLinkedIn.png';
import FooterInstagram from '../assets/FooterInstagram.png';
import FooterFacebook from '../assets/FooterFacebook.png';
import FooterTwitter from '../assets/FooterTwitter.png';
import ReactIcon from '../assets/FooterReact.png';
import WordPressIcon from '../assets/FooterWordPress.png';
import WixIcon from '../assets/FooterWix.png';
import ButtonSmall from './Buttons/ButtonSmall';

const Footer = () => {
  return (
    <div className="bg-darkblue text-offwhite px-20 py-10 flex md:flex-row flex-col justify-around">
      {/* About Us Section */}
      <div className="flex flex-col items-start max-w-xs">
        <h2 className="text-lg font-semibold mb-2">About Us</h2>
        <div className="w-8 h-1 bg-peachred mb-4"></div>
        <p className="text-sm mb-6 mt-1">It is a long established <br /> fact that a reader will be distracted <br /> by the readable content of a page <br /> when looking at.</p>
        <div className="flex justify-center space-x-6 mt-9">
          <img src={FooterLinkedIn} alt="LinkedIn" className="w-9 h-9 bg-offwhite p-2 rounded-lg" />
          <img src={FooterInstagram} alt="Instagram" className="w-9 h-9 bg-offwhite p-2 rounded-lg" />
          <img src={FooterFacebook} alt="Facebook" className="w-9 h-9 bg-offwhite p-2 rounded-lg" />
          <img src={FooterTwitter} alt="Twitter" className="w-9 h-9 bg-offwhite p-2 rounded-lg" />
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
            <img src={ReactIcon} alt="React Developer" className="w-10 h-10 bg-offwhite p-2 rounded-lg" />
            <div>
              <h3 className="text-peachred font-bold ml-3">ReactJs Dev.</h3>
              <p className="text-sm ml-3">1-5 Years of Exp.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src={WordPressIcon} alt="WordPress Developer" className="w-10 h-10 bg-offwhite p-2 rounded-lg" />
            <div>
              <h3 className="text-peachred font-bold ml-3">WordPress Dev.</h3>
              <p className="text-sm ml-3">1-5 Years of Exp.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src={WixIcon} alt="Wix Developer" className="w-10 h-10 bg-offwhite p-2 rounded-lg" />
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
        <div className='flex justify-end w-full py-4'>
          <ButtonSmall type="submit" text="Submit" />
        </div>
      </div>
    </div>
  );
};


export default Footer;

