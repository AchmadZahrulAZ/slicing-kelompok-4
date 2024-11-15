import React from 'react';
import { FaRegLightbulb, FaRegStar, FaLaptopCode, FaPencilRuler, FaServer, FaMobileAlt, FaHubspot, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import Quotes from '../components/Quotes';

const OurServices = () => {
  return (
    <>
      <Header title={'Our Services'} />
      <div className="px-6 py-10 bg-gray-50">
        {/* What We Do Section */}
        <section className="flex flex-col md:flex-row items-center mb-12 bg-offwhite py-20 px-20 gap-8">
          {/* Left Column: Image */}
          <div className="md:w-1/2">
            <img
              src="https://www.shiftbase.com/hs-fs/hubfs/6a0fa8af-1b1a-4f25-aa51-3ae2579d4e95%5B1%5D.jpeg?width=1088&name=6a0fa8af-1b1a-4f25-aa51-3ae2579d4e95%5B1%5D.jpeg" // Ganti dengan path gambar Anda
              alt="Team working together"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div className="md:w-1/2">
            <h2 className="text-xl text-peachred font-semibold mb-2">\ What We Do \</h2>
            <h1 className="text-4xl font-bold text-darkblue mb-4">
              We Develop Products That <br /> People Love to Use.
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsum is that it has a more-or-less normal distribution <br /> of
              letters, as opposed, of a page when looking at its layout. The <br /> point of using Lorem Ipsum is that of a page when looking at its <br /> layout. The point of using Lorem Ipsum is thatLorem Ipsum is that it <br /> has a more-or-less
              normalLorem IpsumLorem Ipsum distribution <br /> of letters, as opposed.
            </p>
            <div className="flex gap-6">
              {/* Vision Box */}
              <div className="p-4 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                {/* Icon bagian kiri */}
                <div className="bg-[#ffe8ef] p-5 rounded-lg text-peachred mr-5">
                  <FaRegLightbulb size={30} />
                </div>
                {/* Teks bagian kanan */}
                <div>
                  <p className="text-lg font-semibold text-red-500">Our Vision</p>
                  <p className="text-gray-600">
                    It is a long esta
                    <br />
                    -blished fact that
                  </p>
                </div>
              </div>
              {/* Goal Box */}
              <div className="p-4 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                {/* Icon bagian kiri */}
                <div className="bg-[#ffe8ef] p-5 rounded-lg text-peachred mr-5">
                  <FaRegStar size={30} />
                </div>
                {/* Teks bagian kanan */}
                <div>
                  <p className="text-lg font-semibold text-red-500">Our Goal</p>
                  <p className="text-gray-600">
                    It is a long esta
                    <br />
                    -blished fact that
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="text-center">
          <h2 className="text-xl text-peachred font-semibold mb-2">\ Services \</h2>
          <h1 className="text-3xl font-bold text-darkblue mb-10">Our Expertise</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Each card for the services */}
            <ServiceCard icon={<FaLaptopCode />} title="Web Design / Development" />
            <ServiceCard icon={<FaPencilRuler />} title="UI/UX Design" />
            <ServiceCard icon={<FaServer />} title="Website Migration" />
            <ServiceCard icon={<FaMobileAlt />} title="App Development" />
            <ServiceCard icon={<FaHubspot />} title="HubSpot Integration" />
            <ServiceCard icon={<FaEnvelope />} title="Email Marketing" />
          </div>
        </section>
      </div>
      <Quotes />
    </>
  );
};

// ServiceCard Component
const ServiceCard = ({ icon, title }) => (
  <div className="p-6 bg-offwhite rounded-lg shadow-md hover:shadow-xl transition duration-300 w-90 h-80 mx-auto">
    {/* Wrapper untuk membuat background ikon menjadi persegi */}
    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#FFFFFF] rounded-md text-red-500 text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-darkblue mb-2 text-left">{title}</h3>
    {/* Tambahkan garis di bawah judul */}
    <div className="flex items-center gap-2 mb-4">
      <div className="w-14 h-1 bg-peachred"></div> {/* Garis panjang */}
      <div className="w-4 h-1 bg-peachred"></div> {/* Garis pendek */}
    </div>
    <p className="text-gray-600 text-left">
      It is a long established fact that a reader <br /> will be distra by the readable content of <br /> a page when looking at its layout, when <br /> looking at its layout
    </p>
  </div>
);

export default OurServices;
