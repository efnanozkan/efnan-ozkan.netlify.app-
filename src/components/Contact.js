import React from "react";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hz9ca4f', 'template_oam17rk', form.current, 'PsViYdWCDiZEyghSx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="bg-stars py-20" id="contact">
      <div className="container text-center mx-auto font-monospace text-white">
        <h2 className="text-5xl text-center mb-10 w-2/4 mx-auto">
          Contact Me
        </h2>
        <div className="bg-hover-color w-3/4 md:w-2/4 mx-auto py-5 text-white">  
        <form ref={form} onSubmit={sendEmail} >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-2xl font-monospace text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Full Name"
          className="w-3/4 border-2 border-[#e0e0e0] bg-white py-3 px-6 text-xl font-monospace text-black outline-none focus:border-alien focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-2xl font-monospace text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="example@domain.com"
          className=" w-3/4 border-2 border-[#e0e0e0] bg-white py-3 px-6 text-xl font-monospace text-black outline-none focus:border-alien focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-2xl font-monospace text-white"
        >
          Message
        </label>
        <textarea
          rows="2"
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-3/4 resize-none border-2 border-[#e0e0e0] bg-white py-3 px-6 text-xl font-monospace text-black outline-none focus:border-alien focus:shadow-md"
        ></textarea>
      </div>
      <div>
      <button type="submit" className='font-monospace max-w-xl md:max-w-3xl text-2xl btn bg-alien text-black px-6 py-3'>
                    Send
            </button>
      </div>
    </form>
        <div className="flex gap-5 text-white mx-auto text-center justify-center mt-5 ">
           <a href="https://github.com/efnanozkan" > <AiFillGithub size={50}/> </a>
           <a href="https://www.linkedin.com/in/efnan-gulsen-ozkan/" > <AiFillLinkedin size={50}/> </a>
        </div>
        </div>
        </div>
    </section>
  )
}
export default Contact;