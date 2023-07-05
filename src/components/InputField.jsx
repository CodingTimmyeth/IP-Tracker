import React from "react";
import Section from "./Section";

const InputField = () => {
  // API Content Comes here
  const ipAddressURL =
    "https://geo.ipify.org/api/v2/country?apiKey=at_lfXFjIhblegGEefvocS4Ko7hkRWfM&ipAddress=8.8.8.8";
  const ipExample = "192.212.174.101";
  const locationExample = " Brooklyn, NY 10001";
  const timeZoneExample = "UTC-05:00";
  const ispExample = "SpaceX Starlink";

  const sections = [
    { title: "IP ADDRESS", subtitle: ipExample },
    { title: "LOCATION", subtitle: locationExample },
    { title: "TIMEZONE", subtitle: timeZoneExample },
    { title: "ISP", subtitle: ispExample },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex absolute top-54 max-w-[1110px] bg-white rounded-lg shadow-md">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            subtitle={section.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default InputField;
