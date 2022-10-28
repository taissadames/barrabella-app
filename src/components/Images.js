import { BsFillCameraFill } from "react-icons/bs";
import React from "react";
import { images } from "../data";

export default function Images() {
  return (
    <section id="images" className="text-black bg-sky-50 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BsFillCameraFill className="mx-auto inline-block w-10 h-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Images
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-wrap">
          {images.map((photo) => (
            <a
              href={photo.link}
              key={photo.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={photo.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-400 bg-gray-400 opacity-0 hover:opacity-80">
                  <h2 className="tracking-widest text-black title-font font-medium text-red-500 mb-1">
                    {photo.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {photo.title}
                  </h1>
                  <p className="leading-relaxed">{photo.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
