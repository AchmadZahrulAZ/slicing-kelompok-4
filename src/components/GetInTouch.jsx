import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import Button from './Buttons/Button';
import map from '../assets/map.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import useSendContact from '../hooks/useSendContact';

const GetInTouch = ({ bg = 'bg-peachred/[.05]', color = 'text-darkblue' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { sendContact, isLoading, error, success } = useSendContact();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting sanitized data:', formData);
    await sendContact(formData); // Panggil fungsi dari custom hook

    // Reset form jika sukses
    if (success) {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

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
          <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-between p-8 rounded-lg min-h-[500px]">
            <div>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4" minLength={3} required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4" required />
              <input type="text" name="phone" inputMode="number" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border-0 bg-offwhite p-3 rounded-lg w-full mb-4" required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} style={{ resize: 'none' }} className="min-h-36 border-0 bg-offwhite p-3 rounded-lg w-full mb-8" minLength={5} required />
            </div>
            <div className="flex justify-start w-full">
              <Button type="submit" text={isLoading ? 'Sending...' : 'Send Now'} />
            </div>
          </form>
          {/* Informasi Kontak */}
          <div className="bg-white flex flex-col justify-between rounded-lg md:p-8 p-4 lg:min-h-[500px] lg:max-h-[500px] min-h-[400px]">
            <div className="flex flex-wrap lg:flex-col flex-row">
              <div className="flex justify-start items-center gap-2 pb-5">
                <img className="bg-offwhite max-w-16 p-4 rounded-md" src={phone} alt="" />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">Call Anytime</p>
                  <p>+1 356 678 7897</p>
                  <p>+1 356 678 7897</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img className="bg-offwhite max-w-16 p-4 rounded-md" src={mail} alt="" />
                <div className="flex flex-col md:min-w-56 min-w-10 justify-start px-2">
                  <p className="font-bold text-xl text-peachred">Send Email</p>
                  <p>connect@itfirms.com</p>
                  <p>hello@itfirms.com</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 pb-5">
                <img className="bg-offwhite max-w-16 p-5 rounded-md" src={map} alt="" />
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
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaInstagram />
                  </div>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-peachred p-4 text-white text-2xl rounded-md">
                    <FaTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Notifikasi */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
    </div>
  );
};

export default GetInTouch;
