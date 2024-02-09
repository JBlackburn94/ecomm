"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  const [nav, setNav] = useState();
  const links = [
    {
      id: 1,
      text: "Latest",
      url: "/",
    },
    {
      id: 2,
      text: "Shop By",
      url: "/",
    },
    {
      id: 3,
      text: "Launches",
      url: "/",
    },
    {
      id: 4,
      text: "Brands",
      url: "/",
    },
    {
      id: 5,
      text: "Clothing",
      url: "/",
    },
    {
      id: 6,
      text: "Footwear",
      url: "/",
    },
    {
      id: 7,
      text: "Accessories",
      url: "/",
    },
    {
      id: 8,
      text: "Lifestyle",
      url: "/",
    },
    {
      id: 9,
      text: "Active",
      url: "/",
    },
    {
      id: 10,
      text: "Sale",
      url: "/",
    },
    {
      id: 11,
      text: "Features",
      url: "/",
    },
  ];
  return (
    <nav>
      <div className="p-2 text-white bg-gray-900">
        <p className="text-xs tracking-widest text-center">
          New lines just added // Free Postage over £50
        </p>
      </div>
      <div className="flex items-center justify-center p-4 md:justify-between">
        <ul className="hidden md:flex">
          <li className="mx-2">
            <a href="#" className="duration-100 hover:font-semibold">
              Men
            </a>
          </li>
          <li className="mx-2 ">
            <a href="#" className="duration-100 hover:font-semibold">
              Women
            </a>
          </li>
        </ul>
        <h1 className="text-3xl font-bold">DNA</h1>
        <ul className="hidden md:flex">
          <li className="mx-2">
            <a href="#">Profile</a>
          </li>
          <li className="mx-2">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="p-4 cursor-pointer lg:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
      {nav && (
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-between mb-2 md:hidden">
              <a href="#" className="p-4 mx-4 text-center bg-gray-200 w-28">
                Men
              </a>
              <a href="#" className="p-4 mx-4 text-center bg-gray-200 w-28">
                Women
              </a>
            </div>
            {links.map(({ id, text, url }) => (
              <li
                key={id}
                className="flex items-center justify-between w-full p-4 m-2 bg-gray-100"
              >
                <a href={url}>{text}</a>
                <MdKeyboardArrowRight size={24} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="items-center justify-center hidden lg:flex">
        <ul className="flex items-center justify-center">
          {links.map(({ id, text, url }) => (
            <li key={id} className="mx-2">
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
