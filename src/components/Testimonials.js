import React from "react";
import { BsFillChatQuoteFill, BsFillPersonFill } from "react-icons/bs";
import { testimonials } from "../data";
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-sky-50" id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <BsFillPersonFill className="w-20 h-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
          {t('Guests Reviews')}
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-400 bg-opacity-40 p-8 rounded">
                <BsFillChatQuoteFill className="block w-8 text-red-400 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  {/* <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  /> */}
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-black">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
