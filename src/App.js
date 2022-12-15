import React, { useState } from "react";
import TypewriterComponent from "typewriter-effect";

function App() {
  const [menu, openMenu] = useState(false);
  return (
    <div className="">
      {/* intro section */}
      <div className="h-[50vh] lg:h-screen bg-gradient-to-t from-indigo-200 relative overflow-hidden">
        {/* navbar */}
        <nav className="w-full fixed top-0 z-10">
          <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-8"
                src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/logo.png"
                alt=""
              />
              <span className="text-2xl font-bold text-indigo-900">
                Portwind.
              </span>
            </div>
            <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
              <li className="hover:text-gray-500">
                <a href="#">Home page</a>
              </li>

              <li className="hover:text-gray-500">
                <a href="#">About me</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">services</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">works</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">Contact</a>
              </li>
            </ul>
            <img
              className="hidden md:block w-5 cursor-pointer"
              src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/moon.png"
              alt=""
            />
            <div
              className="space-y-1 md:hidden cursor-pointer"
              onClick={() => openMenu(true)}
            >
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
            {menu ? (
              <div
                className="space-y-1 md:hidden cursor-pointer z-20"
                onClick={() => openMenu(false)}
              >
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            ) : null}
            {menu ? (
              <ul className=" bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                <li>
                  <a href="#">Home page</a>
                </li>

                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">works</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>
        {/* intro content */}
        {/* image */}
        {/* <img className="absolute bottom-0 right-10 rounded-full  w-28 h-30 object-cover" src="/Assets/photo aswanth (1).JPG" alt="" /> */}
        {/* circle */}
        <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"></div>

        {/* animated text */}
        <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold text-red-500">
          <span className="text-gray-600">Mern stack</span>

          <TypewriterComponent
            options={{
              loop: true,
              delay: 450,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('<p className="text-red-500">Developer</p>')
                .start();
            }}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-5 shadow-lg absolute top-10 bottom-0 m-auto right-10 p-6 h-fit bg-white w-1/3">
          <h1 className="text-4xl font-bold text-indigo-900">Hi I'm Aswanth</h1>
          <p className="text-gray-400 text-lg">
            with over 10 years of experiance on web design and development.
            Loream with over 10 years of experiance on web design and
            development. Loream with over 10 years of experiance on web design
            and development. Loream
          </p>
          <a
            className="bg-indigo-600 text-white text-xl rounded-md font-semibold px-3 py-2 w-fit"
            href="#contact"
          >
            Hire me
          </a>
        </div>
      </div>
<div className="px-10">
      {/* About */}
      <div className="container mx-auto flex gap-20 py-40 flex-col-reverse lg:flex-row items-center">
        {/* left */}
        <div className="relative">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10"
            src="https://raw.githubusercontent.com/safak/youtube2022/tailwind-portfolio/img/dots.png"
            alt=""
          />
          <div className="h-full rounded-full overflow-hidden">
            <img src="/Assets/photo aswanth (1).JPG" alt="" />
          </div>
        </div>
        <div className="my-auto flex flex-col gap-3">
        <h1 className="text-indigo-600 font-bold">About me</h1>
        <h1 className="text-3xl font-medium">Better Designs</h1>
        <h1 className="text-3xl font-medium" >Better Experience</h1>
        <p className="text-gray-400"> I design and build digital products.I design and build digital products.
        I design and build digital products.I design and build digital products.
        </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
