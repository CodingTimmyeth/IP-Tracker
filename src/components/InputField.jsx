import React from "react";
import Section from "./Section";

const InputField = () => {
  // API Content Comes here
  let ipAddressExample = "8.8.8.8";
  let locationExample = " Brooklyn, NY 10001";
  let timeZoneExample = "UTC-05:00";
  let ispExample = "SpaceX Starlink";

  const sections = [
    { title: "IP ADDRESS", subtitle: ipAddressExample },
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
