import Logo from "./assets/logo.png";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const GetUpdates = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("GET UPDATES");
  const SERVICE_ID = "service_z93v9pk"
  const TEMPLATE_ID = "template_40sutlv"
  const PUBLIC_KEY = "CLEL5gc6ucU5Raknv"

  const sendEmail = (e) => {
    setButtonText('Sending...')
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
    setButtonText("GET UPDATES")
    e.target.reset();
  };

  return (
    <div className="bg-updates h-screen w-screen flex justify-center items-center flex-col p-2 ">
      <div className="-mt-24">
        <img src={Logo} alt="" className="h-56" />
        <h1 className="text-2xl font-bold text-white -mt-24 text-center">
          Aidignite.com
        </h1>
      </div>

      <h1 className="text-4xl md:text-6xl text-white text-center font-extralight my-4">
        COMMING SOON
      </h1>
      <p className="text-white text-center">
        Our website is under construction, follow us for update now!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 flex flex-wrap justify-center items-center gap-2 "
      >
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          className="bg-white  rounded-full py-2 px-4 w-full sm:w-48 md:w-60 lg:w-72"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Enter your email address"
          className="bg-white rounded-full py-2 px-4 w-full sm:w-48 md:w-60 lg:w-72"
        />
        <button type="submit" value="Send" className="bg-black hover:bg-white hover:text-black text-white  rounded-full py-2 px-6 duration-300">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default GetUpdates;
