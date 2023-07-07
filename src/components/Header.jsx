import React from "react";
import { useState } from "react";
// import FetchData from "./FetchData";

const Header = ({ userIpAddress }) => {
  userIpAddress = "Hello World";
  const [ipAddress, setIpAddress] = useState("");
  const [isValid, setIsValid] = useState(true);

  // We need to get the input value into a state variable
  const handleOnChange = (e) => {
    const value = e.target.value;
    setIsValid(validateIpAddress(value));
    // setIpAddress(value);
  };
  // First Handle the errors the user might display
  const validateIpAddress = (value) => {
    const ipAddressRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipAddressRegex.test(value);
  };

  const handleOnClick = () => {
    if (isValid) {
      console.log(ipAddress);
      setIpAddress(ipAddress);
    } else {
      alert("Not Valid!");
    }
  };

  const handleFetchData = (data) => {
    console.log(data);
  };
  return (
    <>
      <header className="w-full h-72 bg-[url('/public/images/pattern-bg-desktop.png')] bg-no-repeat bg-cover flex flex-col items-center pt-7 text-white shadow-lg">
        <h1 className="font-bold text-3xl mb-4">IP Address Tracker</h1>
        <div className="flex justify-center min-w-[496px]">
          {/* Input Address or Domain */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any IP Adress or Domain"
              className={`py-4 px-7 rounded-lg outline-none text-black w-full rounded-r-none ${
                !isValid ? "border-2 border-red-500" : ""
              }`}
              onChange={handleOnChange}
            />
            {/* <FetchData ip={ipAddress} onFetchData={handleFetchData}></FetchData> */}
            {!isValid && (
              <p className="text-red-500 italic text-xs">
                Please Enter A Valid IP Address
              </p>
            )}
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
