import React from "react";
import ButtonSmall from "./Buttons/ButtonSmall";

const Quotes = () => {
  return (
    <div className="md:px-24 px-0 lg:scale-100 scale-75">
      <div className="relative h-fit flex justify-center items-center font-raleway my-12">
        {/* IMAGE */}
        <img
          className="object-cover lg:block hidden h-80 w-full scale-75 rounded-xl"
          src="https://internationallicensepermit.com/wp-content/uploads/2022/05/woman-working-call-center.jpg"
          alt=""
        />
        {/* FILTER DARKBLUE */}
        <div className="lg:absolute static lg:block hidden bg-darkblue h-80 w-full scale-75 rounded-xl opacity-75"></div>
        {/* QUOTES TEXT */}
        <div className="lg:absolute static max-w-2xl flex flex-col justify-center items-center gap-8 px-4">
          <h1 className="font-bold text-3xl lg:text-white text-darkblue text-center">
            “Some of the History of Our Company is that we are Catching up
            through Video”
          </h1>
          <ButtonSmall text={"Get In Touch"} />
        </div>
      </div>
    </div>
  );
};

export default Quotes;
