import React from "react";
import call from "../assets/call.png";
import useGet from "../hooks/useGetObject";

const AboutUs = () => {
  const { data, error, loading } = useGet({ page: "about-us" });

  return (
    <div className="md:px-32 px-10 py-24 bg-offwhite font-raleway">
      {loading ? (
        <div className="bg-peachred/[.05] shadow rounded-md p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-12 py-1">
              <div className="space-y-6">
                <div className="grid grid-cols-4 grid-rows-4 gap-4">
                  <div className="h-80 bg-darkblue/[.5] rounded col-span-2 row-span-4"></div>
                  <div className="h-12 bg-darkblue/[.5] rounded col-span-1"></div>
                  <div className="h-12 bg-darkblue/[.5] rounded col-span-2"></div>
                  <div className="h-12 bg-darkblue/[.5] rounded col-span-1"></div>
                  <div className="h-12 bg-darkblue/[.5] rounded col-span-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex xl:flex-row flex-col items-center justify-center gap-8">
          <div>
            {/* ABOUT US IMAGE */}
            <img
              className="lg:max-h-[400px] lg:max-w-[555px]"
              src={data && data.imageUrl}
              alt="About us image"
            />
          </div>
          {/* GROUP TEXT DESCRIPTION */}
          <div className="max-w-lg">
            <h2 className="font-bold text-2xl text-peachred">\ About Us \</h2>
            <h1 className="font-bold text-4xl text-darkblue">
              {data && data.title}
            </h1>
            <p className="font-medium py-8">{data && data.desc}</p>
            {/* LINK TO CALL (WA) */}
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              className="group bg-white p-3 rounded-md flex md:flex-row flex-col w-full hover:bg-peachred hover:text-white transition-all ease-in-out duration-300"
            >
              <div className="flex justify-start gap-2">
                <img
                  className="bg-offwhite max-w-12 max-h-12 p-3 rounded-md"
                  src={call}
                  alt=""
                />
                <div className="flex flex-col justify-center px-2">
                  <p className="font-bold text-xl">
                    Get Instant Professional Advice
                  </p>
                  <p className="md:block hidden">
                    Ready to help:{" "}
                    <span className="font bold text-peachred group-hover:text-white transition-all ease-in-out duration-300">
                      +1 356 678 7897
                    </span>
                  </p>
                </div>
              </div>
              {/* RESPONSIVE HIDDEN TEXT */}
              <p className="md:hidden block py-2">
                Ready to help:{" "}
                <span className="font bold text-peachred group-hover:text-white transition-all ease-in-out duration-300">
                  +1 356 678 7897
                </span>
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
