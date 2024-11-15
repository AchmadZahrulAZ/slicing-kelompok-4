import React from "react";
import Button from "./Buttons/Button";
import map from "../assets/map.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="px-32 py-24 bg-peachred/[.05]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl text-peachred">\ Get In Touch \</h2>
        <h1 className="font-bold text-4xl text-darkblue">Hey! Let's Talk</h1>
      </div>
      <div className="flex justify-center items-start gap-4 mt-10">
        <form className="bg-white flex flex-col justify-between p-8 rounded-lg min-h-[500px]">
            <div>
          <input
            type="text"
            placeholder="Name"
            className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
          />
          <input
            type="text"
            inputMode="number"
            placeholder="Phone"
            className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            style={{ resize: "none" }}
            className="min-h-36 border-0 bg-offwhite p-3 rounded-lg w-full mb-8"
          />
            </div>
          <Button text={"Send Now"} />
        </form>
        <div className="bg-white flex flex-col justify-between rounded-lg p-8 min-h-[500px]">
          <div>
            <div className="flex justify-start items-center gap-2 pb-5">
              <img
                className="bg-offwhite max-w-16 p-4 rounded-md"
                src={phone}
                alt=""
              />
              <div className="flex flex-col min-w-56 justify-start px-2">
                <p className="font-bold text-xl text-peachred">Call Anytime</p>
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
              <div className="flex flex-col min-w-56 justify-start px-2">
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
              <div className="flex flex-col min-w-56 justify-start pl-2">
                <p className="font-bold text-xl text-peachred">Visit Us</p>
                <p>20 Island Park Road,</p>
                <p>New Jearsy, New York, USA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl py-5">Follow Us</h1>
            <div className="flex justify-between items-center gap-7 py-4">
              <a href="">
                <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                  <FaLinkedinIn />
                </div>
              </a>
              <a href="">
                <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                  <FaInstagram />
                </div>
              </a>
              <a href="">
                <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                <FaFacebookF />
                </div>
              </a>
              <a href="">
                <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                  <FaTwitter />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
