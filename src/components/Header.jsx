import React from "react";
import { useState } from "react";

const Header = () => {
  const [ipAddress, setIpAddress] = useState("");

  const handleOnChange = (e) => {
    setIpAddress(e.target.value);
  };

  const handleOnClick = () => {
    return checkInput(ipAddress);
  };

  // function checkInput(input) {
  //   const domainRegex = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;
  //   const ipAddressRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

  //   return domainRegex.test(input) || ipAddressRegex.test(input);
  // }

  return (
    <>
      <header className="w-full h-72 bg-[url('/public/images/pattern-bg-desktop.png')] flex flex-col items-center pt-7 text-white shadow-lg">
        <h1 className="font-bold text-3xl mb-4">IP Address Tracker</h1>
        <div className="flex justify-center min-w-[496px]">
          {/* Input Address or Domain */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any IP Adress or Domain"
              className="py-4 px-7 rounded-lg outline-none text-black w-full rounded-r-none"
              onChange={handleOnChange}
            />
          </div>
          <div
            className="rounded-r-lg flex justify-center items-center p-5 cursor-pointer w-14 h-fit"
            style={{ backgroundColor: "hsl(0, 0%, 17%)" }}
          >
            <img
              src="/public/images/icon-arrow.svg"
              alt="Icon Arrow"
              className="cursor-pointer w-7"
              onClick={handleOnClick}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
