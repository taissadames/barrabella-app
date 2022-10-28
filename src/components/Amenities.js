import { ImOffice } from "react-icons/im";
import { BsFillCheckSquareFill } from "react-icons/bs";
import React from "react";
import { amenities } from "../data";
import { useTranslation } from 'react-i18next';

export default function Amenities() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-sky-50" id="amenities">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-20">
          <ImOffice className="w-10 h-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
          {t('Amenities')}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {t('amenities_p')}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {amenities.map((amenitie) => (
            <div key={amenitie} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 rounded flex p-4 h-full items-center">
                <BsFillCheckSquareFill className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black">
                  {amenitie}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

