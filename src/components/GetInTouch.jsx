import React from "react";
import Button from "./Buttons/Button";
import map from "../assets/map.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const GetInTouch = ({bg="bg-peachred/[.05]", color="text-darkblue"}) => {
  return (
    <div className={bg}>
      <div className="md:px-32 px-10 py-24">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl text-peachred">\ Get In Touch \</h2>
          <div className={color}>
            <h1 className="font-bold text-4xl">Hey! Let's Talk</h1>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-start gap-4 mt-10">
          <form
            action=""
            className="bg-white flex flex-col justify-between p-8 rounded-lg min-h-[500px]"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                minLength={3}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                required
              />
              <input
                type="text"
                inputMode="number"
                placeholder="Phone"
                className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
                required
              />
              <textarea
                type="text"
                placeholder="Your Message"
                style={{ resize: "none" }}
                className="min-h-36 border-0 bg-offwhite p-3 rounded-lg w-full mb-8"
                minLength={5}
                required
              />
            </div>
            <div className='flex justify-start w-full'>
              <Button type={"submit"} text={"Send Now"} />
            </div>
          </form>
          <div className="bg-white flex flex-col justify-between rounded-lg md:p-8 p-4 lg:min-h-[500px] lg:max-h-[500px] min-h-[400px]">
            <div className="flex flex-wrap lg:flex-col flex-row">
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-4 rounded-md"
                  src={phone}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">
                    Call Anytime
                  </p>
                  <p>+1 356 678 7897</p>
                  <p>+1 356 678 7897</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-4 rounded-md"
                  src={mail}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">Send Email</p>
                  <p>connect@itfirms.com</p>
                  <p>hello@itfirms.com</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img
                  className="bg-offwhite max-w-16 p-5 rounded-md"
                  src={map}
                  alt=""
                />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start pl-2">
                  <p className="font-bold text-xl text-peachred">Visit Us</p>
                  <p>20 Island Park Road,</p>
                  <p>New Jearsy, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl py-5">Follow Us</h1>
              <div className="flex flex-wrap justify-between items-center md:gap-4 gap-2 py-4">
                <a href="https://www.linkedin.com/" target="_blank">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://instagram.com/" target="_blank">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaInstagram />
                  </div>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
