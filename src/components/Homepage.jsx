import React from "react";
import HomepageImage from "../assets/MaskGroup.png";
import SamualKarl from "../assets/SamualKarl.png";

export default function Homepage() {
  return (
    <>
      <div className="bg-whitecstm font-raleway mt-12">
        <div className="grid grid-cols-2">
          <div className="content-center justify-self-center">
            <p className="text-2xl font-bold text-peachred">\ We Are Here \</p>
            <h1 className="text-5xl font-bold text-darkblue my-4 leading-[58px]">
              Better Insights For <br />
              Business Growth
            </h1>
            <button className="bg-peachred text-whitecstm px-6 py-3 rounded-md font-medium">
              View More
            </button>
          </div>
          <div>
            <img src={HomepageImage} alt="Homepage Image" />
          </div>
        </div>
      </div>

      {/* <div className="bg-whitecstm font-raleway text-center mt-24">
        <p className="text-2xl font-bold text-peachred">
          \ From our Customers \
        </p>
        <h1 className="text-5xl font-bold text-darkblue my-4">Testimonials</h1>
        <div className="bg-offwhite">
          <div className="grid grid-rows-3">
            <div className="justify-between m-8">
                <img src={SamualKarl} alt="" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
