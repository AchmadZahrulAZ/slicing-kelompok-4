import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useGet from "../hooks/useGetArray";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSlider = ({ total = 3 }) => {
  const { data, error, loading } = useGet({ page: "testimonials" });

  const testimonials = data.slice(0, total);

  return (
    <div className="w-full mx-auto p-6 py-24 md:px-32 px-10">
      <h2 className="text-center text-2xl font-bold text-peachred">
        \ From our Customers \
      </h2>
      <h3 className="text-center text-4xl font-bold text-blue-900 mb-8">
        Testimonials
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-md mx-auto bg-offwhite rounded-lg shadow-md p-6 mb-12">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="text-7xl text-peachred">“</div>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.message}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-peachred font-semibold">{testimonial.name}</p>
                <p className="text-blue-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
