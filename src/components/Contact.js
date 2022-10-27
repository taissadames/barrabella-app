import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { BsFillChatLeftDotsFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cggo7k', 'template_7ghg3bi', form.current, '5o9XfEN6Dwkh3Okly')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  }

  // export default function Contact() {
  //   const [name, setName] = React.useState("");
  //   const [email, setEmail] = React.useState("");
  //   const [message, setMessage] = React.useState("");

  //   function encode(data) {
  //     return Object.keys(data)
  //       .map(
  //         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //       )
  //       .join("&");
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "test", name, email, message }),
  //     })
  //       .then(() => alert("Message sent!"))
  //       .catch((error) => alert(error));
  //   }

  return (
    <section id="contact" className="relative bg-sky-50">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=condomínio+barrabella+barra+da+tijuca&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-200 relative flex flex-wrap py-6 rounded shadow-md opacity-75">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Av. Lúcio Costa, 4700. <br />
                Rio de Janeiro, RJ 22630-011 Brazil.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">
                taissadames@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0424000000</p>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          {/* <BsFillChatLeftDotsFill className="w-10 h-10 inline-block mb-4 justify-center" /> */}
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-black mb-10 text-center">
            Enquiry now
          </h2>
          <p className="leading-relaxed mb-10">
            Send us an email if you've got questions. Otherwise, the host is happy to talk to you via WhatsApp.
          </p>
          <div className="flex justify-center">
            <a href="https://wa.me/5521988629280"><img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="" className="w-10 mb-8 float-left"/></a> 
            <a href="https://instagram.com/apartbarrabella?igshid=YmMyMTA2M2Y="><img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt="" className="w-16 mb-8 float-left"/></a> 
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-stone-40 rounded border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-stone-40 rounded border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-stone-40 rounded border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-400 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              // onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            // value="Send"
            className="text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;