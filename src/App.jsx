import Header from "./components/Header";
import IpInformation from "./components/IpInformation";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    userIpAddress: "",
    isValid: true,
  });

  const [locationData, setLocationData] = useState({
    ip: "",
    city: "",
    country: "",
    timezone: "",
    isp: "",
    lat: "",
    lng: "",
  });

  const { userIpAddress, isValid } = formData;
  const { ip, city, country, timezone, isp, lat, lng } = locationData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      userIpAddress: e.target.value,
    });
  };

  const handleFetchData = async () => {
    if (userIpAddress === "") {
      alert("Please enter an IP Address");
      return;
    }

    try {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_lfXFjIhblegGEefvocS4Ko7hkRWfM&ipAddress=${userIpAddress}`;
      const response = await fetch(url);
      const result = await response.json();
      const { ip, city, isp } = result;
      const { country, timezone, lat, lng } = result.location;

      setLocationData({
        ...locationData,
        ip,
        city,
        country,
        timezone,
        isp,
        lat,
        lng,
      });
      setFormData({
        ...formData,
        isValid: true,
      });
    } catch (error) {
      console.error("ERROR:", error);
      setFormData({
        ...formData,
        isValid: false,
      });
    }
  };

  return (
    <>
      <div className="w-screen bg-[url('/images/pattern-bg-mobile.png')] bg-no-repeat bg-cover h-[280px] lg:bg-[url('/images/pattern-bg-desktop.png')] lg:bg-cover lg:bg-no-repeat lg:h-[280px] lg:flex lg:flex-col lg:items-center lg:shadow-xl lg:relative">
        <Header />
        <div className="flex justify-center lg:min-w-[496px]">
          {/* Input Address or Domain */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any IP Adress"
              className={`py-4 px-7 rounded-2xl outline-none text-black w-full rounded-r-none border cursor-pointer ${
                isValid ? "" : "border-red-500 border-2"
              }`}
              onChange={handleInputChange}
            />
            {!isValid && (
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
