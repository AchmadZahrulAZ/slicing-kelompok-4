import React from "react";
import ButtonSmall from "./Buttons/ButtonSmall";

const Quotes = () => {
  return (
    <div className="px-24">
      <div className="relative h-fit flex justify-center items-center text-white font-raleway my-12">
        <img
          className="object-cover h-80 w-full scale-75 rounded-xl"
          src="https://internationallicensepermit.com/wp-content/uploads/2022/05/woman-working-call-center.jpg"
          alt=""
        />
        <div className="absolute bg-darkblue h-80 w-full scale-75 rounded-xl opacity-75"></div>
        <div className="absolute max-w-2xl flex flex-col justify-center items-center gap-8 px-4">
          <h1 className="font-bold text-3xl text-center">
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
