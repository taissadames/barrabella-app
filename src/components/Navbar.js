import { HiArrowRight } from "react-icons/hi2";
import { BiCalendarCheck } from "react-icons/bi";
import React from "react";
import i18n from "../i18n";
import { useTranslation } from 'react-i18next';
import Translate from "./Translate";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln)
    console.log(`Language changed to ${ln}`)
  }
}
export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <header className="bg-sky-100 pb-0 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            BarraBella
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#images" className="mr-5 hover:text-red-400">
          {t('Images')}
          </a>
          <a href="#amenities" className="mr-5 hover:text-red-400">
          {t('Amenities')}
          </a>
          <a href="#testimonials" className="mr-5 hover:text-red-400">
            {t('Reviews')}
          </a> 
          {/* <a href="#images" className="mr-5 hover:text-red-400">
            Images
          </a>  */}
          <Translate/>
          <img onClick={changeLanguage("es")} alt="es" src="https://cdn-icons-png.flaticon.com/512/2960/2960689.png" className="w-11 mb-1 mt-1 mr-2 float-right cursor-pointer"></img>
          <img onClick={changeLanguage("pt")} alt="pt" src="https://cdn-icons-png.flaticon.com/512/197/197386.png" className="w-8 mb-1 mt-1 mr-2 float-right cursor-pointer"></img>
          <img onClick={changeLanguage("en")} src="https://cdn.countryflags.com/thumbs/australia/flag-400.png" className="w-8 mb-1 mt-1 mr-2 float-right cursor-pointer" ></img>
          {/* <a href="#english" className="mr-5 hover:text-red-400">
            English
          </a> 
          <a href="#spanish" className="mr-5 hover:text-red-400">
            Español
          </a>  */}
        </nav>
        {/* <div id="google_translate_element" className="boxTradutor">
            <a href=""><img alt="spanish" src="https://cdn-icons-png.flaticon.com/512/2960/2960689.png" className="w-11 mb-6 mt-6 mr-5 float-right"></img></a>
            <a href=""><img alt="english" src="https://cdn.countryflags.com/thumbs/australia/flag-400.png" className="w-8 mb-4 mt-8 mr-2 float-right"></img></a>
        </div> */}
        <a
          href="https://www.airbnb.com.au/rooms/689766276270557769?source_impression_id=p3_1666497971_13W6hgQ3i%2FaEoHt4&_set_bev_on_new_domain=1666497969_MmRlYzZiMjQwYjI0&translate_ugc=false"
          className="inline-flex text-white bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded mt-4 md:mt-1 md:mb-1 mr-5">
          {t('Book Now on Airbnb')}
          <BiCalendarCheck className="w-4 h-4 ml-1 mt-1" />
          </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-1 md:mb-1">
          {t('Enquiry now!')}
          <HiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
