import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Quotes from '../components/Quotes';
import ButtonSmall from '../components/Buttons/ButtonSmall';
import SEOcomponents from '../components/SeoComponents';
import useGet from '../hooks/useGetArray';

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const {data, error, loading} = useGet({page: "portfolio"})

  // IMAGES PER BUTTON OR GENRE
  const images = {
    ALL: data,
    LIFE: data,
    MOMENTS: data,
    NATURE: data,
    STORIES: data,
    TRAVEL: data,
  };

  const handleButtonClick = (buttonName) => {
    setActiveImage(images[buttonName]);
    setActiveButton(buttonName);
  };

  // DEFAULT BUTTON ALL
  useEffect(() => {
    handleButtonClick('ALL');
  }, []);

  return (
    <>
      <SEOcomponents page="portfolio" />
      <Header title={'Portfolio'} />
      <div className="bg-whitecstm font-raleway text-center mt-24">
        <p className="text-2xl font-bold text-peachred">\ Portfolio \</p>
        <h1 className="text-darkblue text-4xl font-bold mt-2">Our Work</h1>
        <div className="mt-16 text-blackshade/50 text-sm font-semibold">
          {Object.keys(images).map((button) => (
            <button key={button} className={`px-9 py-3 border ${activeButton === button ? 'bg-peachred text-whitecstm' : 'border-blackshade/50'}`} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
        </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-32">
            {data.map((index) => (
              <img key={index} src={data.imageUrl} alt={`Portfolio`} className="w-full h-auto rounded-md" />
            ))}
          </div>
      </div>
      <div className="flex justify-center w-full py-10">
        <ButtonSmall text="Get In Touch" />
      </div>
      <Quotes />
    </>
  );
}

