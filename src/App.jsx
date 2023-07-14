import Header from "./components/Header"; // ✅
import IpInformation from "./components/IpInformation";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [userIpAddress, setUserIpAddress] = useState("");
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleOnChange = (e) => {
    setUserIpAddress(e.target.value);
    // const ipV4Regex =
    //   /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  };

  // Fetching the data
  const handleFetchData = async () => {
    if (userIpAddress === "") {
      alert("Please enter a IP Address");
      return;
    }
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
      setLat(result.location.lat);
      setLng(result.location.lng);
      setIsValid(true);
    } catch (error) {
      console.error("ERROR:", error);
      setIsValid(false);
      return;
    }
  };

  return (
    <>
      <div className="w-screen bg-[url('/images/pattern-bg-mobile.png')] bg-no-repeat bg-cover h-[280px] lg:bg-[url('/images/pattern-bg-desktop.png')] lg:bg-cover lg:bg-no-repeat lg:h-[280px] lg:flex lg:flex-col lg:items-center lg:shadow-xl lg:relative">
        <Header></Header>
        <div className="flex justify-center lg:min-w-[496px]">
          {/* Input Address or Domain */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any IP Adress or Domain"
              className={`py-4 px-7 rounded-2xl outline-none text-black w-full rounded-r-none border cursor-pointer ${
                isValid ? "" : "border-red-500 border-2"
              }`}
              onChange={handleOnChange}
            />
            {isValid ? (
              ""
            ) : (
              <p className="text-red-500 italic text-md">
                Please Enter a valid IP Address
              </p>
            )}
          </div>
          <div
            className="rounded-r-2xl flex flex-col justify-center items-center p-5 cursor-pointer w-14 h-fit transition-all hover:opacity-90"
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
        <div className="z-30 mt-20 bottom-20">
          <IpInformation
            ip={ip}
            city={city}
            country={country}
            timezone={timezone}
            isp={isp}
          />
        </div>
      </div>
      <Map lat={lat} lng={lng} />
    </>
  );
}

export default App;
