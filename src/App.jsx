import Header from "./components/Header"; // ✅
import IpInformation from "./components/IpInformation";

import { useState } from "react";

function App() {
  const [userIpAddress, setUserIpAddress] = useState("");
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const handleOnChange = (e) => {
    setUserIpAddress(e.target.value);
  };

  // Fetching the data
  const handleFetchData = async () => {
    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_lfXFjIhblegGEefvocS4Ko7hkRWfM&ipAddress=${userIpAddress}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setIp(result.ip);
      setCity(result.location.city);
      setCountry(result.location.country);
      setTimeZone(result.location.timezone);
      setIsp(result.isp);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <>
      <div className="bg-[url('/images/pattern-bg-desktop.png')] bg-cover bg-no-repeat h-[280px] flex flex-col items-center shadow-xl relative">
        <Header></Header>
        <div className="flex justify-center min-w-[496px]">
          {/* Input Address or Domain */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any IP Adress or Domain"
              className="py-4 px-7 rounded-lg outline-none text-black w-full rounded-r-none border"
              onChange={handleOnChange}
            />
          </div>
          <div
            className="rounded-r-lg flex flex-col justify-center items-center p-5 cursor-pointer w-14 h-fit"
            style={{ backgroundColor: "hsl(0, 0%, 17%)" }}
            onClick={handleFetchData}
          >
            <img
              src="/images/icon-arrow.svg"
              alt="Icon Arrow"
              className="cursor-pointer w-7"
            />
          </div>
        </div>
        <div className="absolute bottom-20">
          <IpInformation
            ip={ip}
            city={city}
            country={country}
            timezone={timezone}
            isp={isp}
          />
        </div>
      </div>
    </>
  );
}

export default App;
