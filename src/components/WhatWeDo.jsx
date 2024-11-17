import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import ServiceTeamWork from "../assets/ServiceTeamWork.png";
import ServiceVision from "../assets/ServiceVision.png";
import ServiceGoal from "../assets/ServiceGoal.png";
import useGet from "../hooks/useGetArray";

const OurServices = ({ button, total = 6, limit = 10 }) => {
  const { data, error, loading } = useGet({ page: `expertise?limit=${limit}` });

  const expertises = data.slice(0, total);
  return (
    <>
      <div className="font-raleway">
        {/* What We Do Section */}
        <section className="flex flex-col xl:flex-row items-center mb-12 bg-offwhite py-20 md:px-32 px-10 gap-8">
          {/* Left Column: Image */}
          <div>
            <img
              src={ServiceTeamWork}
              alt="Team working together"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Text */}
          <div>
            <h2 className="text-xl text-peachred font-semibold mb-2">
              \ What We Do \
            </h2>
            <h1 className="text-4xl font-bold text-darkblue mb-4">
              We Develop Products That <br /> People Love to Use.
            </h1>
            <p className="text-gray-600 mb-6">
              It is a long established fact that a reader will be distracted by
              the <br /> readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-2 md:flex-row flex-col">
              {/* Vision Box */}
              <div className="p-3 bg-[#FFFFFF] rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-3 rounded-lg text-peachred mr-5">
                  <img
                    src={ServiceVision}
                    alt="Our Vision"
                    className="min-w-8 min-h-8"
                  />
                </div>
                <div className="min-w-32 hyphens-auto">
                  <p className="font-semibold text-red-500">Our Vision</p>
                  <p className="text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
              {/* Goal Box */}
              <div className="bg-[#FFFFFF] p-3 rounded-lg shadow-md flex items-center">
                <div className="bg-[#ffe8ef] p-3 rounded-lg text-peachred mr-5">
                  <img
                    src={ServiceGoal}
                    alt="Our Goal"
                    className="min-w-8 min-h-8"
                  />
                </div>
                <div className="min-w-32 hyphens-auto">
                  <p className="font-semibold text-red-500">Our Goal</p>
                  <p className="text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
            </div>
            {button}
          </div>
        </section>

        {/* Services Section */}
        <section className="text-center py-10 md:px-32 px-10">
          <h2 className="text-xl text-peachred font-semibold mb-2">
            \ Services \
          </h2>
          <h1 className="text-3xl font-bold text-darkblue mb-10">
            Our Expertise
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {expertises.map((expertise, index) => (
              <div key={index}>
                <ServiceCard
                  imgSrc={expertise.iconUrl}
                  title={expertise.title}
                  desc={expertise.desc}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

// Define PropTypes for OurServices
OurServices.propTypes = {
  button: PropTypes.node, // A React node (e.g., JSX element, text, or null)
};

// ServiceCard Component
const ServiceCard = ({ imgSrc, title, desc }) => (
  <div className="p-6 bg-offwhite rounded-lg shadow-md hover:shadow-xl transition duration-300 w-90 h-80 mx-auto">
    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-[#FFFFFF] rounded-md">
      <img src={imgSrc} alt={title} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-darkblue mb-2 text-left">{title}</h3>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-14 h-1 bg-peachred"></div>
      <div className="w-4 h-1 bg-peachred"></div>
    </div>
    <p className="min-w-56 text-left">{desc}</p>
  </div>
);

// Define PropTypes for ServiceCard
ServiceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Must be a string (URL for the image)
  title: PropTypes.string.isRequired, // Must be a string
  desc: PropTypes.string.isRequired, // Must be a string
};

export default OurServices;
