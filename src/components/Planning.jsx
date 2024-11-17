import React from "react";
import Research from "../assets/Research.png";
import Design from "../assets/Design.png";
import Develope from "../assets/Develope.png";
import Test from "../assets/Test.png";

export default function Planning() {
  // ServiceCard Component
  const ServiceCard = ({ icon, title, number }) => (
    <div className="relative p-6 bg-offwhite rounded-lg shadow-md hover:shadow-xl transition duration-300 w-90 h-80 mx-auto">
      {/* Angka di kanan atas */}
      <div className="absolute top-2 right-2 text-darkblue/10 text-5xl font-extrabold px-2 py-1 rounded-full">
        0{number}
      </div>
      
      {/* Wrapper untuk membuat background ikon menjadi persegi */}
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#FFFFFF] rounded-md text-red-500 text-4xl">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-xl font-semibold text-darkblue mb-2 text-left">
        {title}
      </h3>
      {/* Tambahkan garis di bawah judul */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-14 h-1.5 bg-peachred rounded-lg"></div> {/* Garis panjang */}
        <div className="w-4 h-1.5 bg-peachred rounded-lg"></div> {/* Garis pendek */}
      </div>
      <p className="text-gray-600 text-left">
        It is a long established fact that a reader <br /> will be distra by the
        readable content of a page
      </p>
    </div>
  );
  return (
    <>
      {/* Services Section */}
      <section className="text-center font-raleway md:px-32 px-10 my-12">
        <h2 className="text-xl text-peachred font-semibold mb-2">
          \ Planning \
        </h2>
        <h1 className="text-3xl font-bold text-darkblue mb-10">
          Our Process
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Each card for the services */}
          <ServiceCard icon={Research} title="Research" number={1} />
          <ServiceCard icon={Design} title="Design" number={2} />
          <ServiceCard icon={Develope} title="Develope" number={3} />
          <ServiceCard icon={Test} title="Test" number={4} />
        </div>
      </section>
    </>
  );
}
