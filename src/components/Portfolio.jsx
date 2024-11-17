import React from "react";
import NothingGreat from "../assets/NothingGreat.png";
import MoreThan from "../assets/MoreThan.png";
import EnjoyWith from "../assets/EnjoyWith.png";
import TheMost from "../assets/TheMost.png";
import AvailableBalance from "../assets/AvailableBalance.png";

export default function Portfolio() {
  return (
    <div className="bg-whitecstm font-raleway text-center mt-24">
      <p className="text-2xl font-bold text-peachred">\ Portfolio \</p>
      <h1 className="text-darkblue text-4xl font-bold mt-2">Our Work</h1>
      <div className="mt-16 text-blackshade/50 text-sm font-semibold">
        <button className="px-9 py-3 border border-blackshade/50 rounded-l-lg">
          ALL
        </button>
        <button className="px-9 py-3 border-y border-r border-blackshade/50 ">
          LIFE
        </button>
        <button className="px-9 py-3 border-y border-r border-blackshade/50 ">
          MOMENTS
        </button>
        <button className="px-9 py-3 border-y border-r border-blackshade/50 ">
          NATURE
        </button>
        <button className="px-9 py-3 border-y border-blackshade/50 ">
          STORIES
        </button>
        <button className="px-9 py-3 border border-blackshade/50 rounded-r-lg">
          TRAVEL
        </button>
      </div>
      <div className="mt-16 mx-36">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <img src={NothingGreat} alt="" className="object-cover" />
          </div>
          <div className="justify-items-end">
            <img src={MoreThan} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-16 mx-36">
        <div className="flex flex-row">
          <div className="basis-1/3">
            <img src={EnjoyWith} alt="" className="object-cover" />
          </div>
          <div className="basis-1/2 justify-items-center">
            <img src={TheMost} alt="" className="object-cover" />
          </div>
          <div className="basis-1/2 justify-items-end">
            <img
              src={AvailableBalance}
              alt=""
              className="h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="my-16 mx-36">
        <button className="bg-peachred px-4 py-2 text-whitecstm rounded-md font-medium">
          Get In Touch
        </button>
      </div>
    </div>
  );
}
