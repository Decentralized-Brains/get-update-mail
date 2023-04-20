import Logo from "./assets/logo.png";

const GetUpdates = () => {
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
        action=""
        className="mt-10 flex flex-wrap justify-center items-center gap-2 "
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="bg-white  rounded-full py-2 px-4 w-full sm:w-48 md:w-60 lg:w-72"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="bg-white  rounded-full py-2 px-4 w-full sm:w-48 md:w-60 lg:w-72"
        />
        <button className="bg-black hover:bg-white hover:text-black text-white  rounded-full py-2 px-6 duration-300">
          GET UPDATES
        </button>
      </form>
    </div>
  );
};

export default GetUpdates;
