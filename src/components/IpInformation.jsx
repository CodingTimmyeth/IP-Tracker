import React from "react";

const IpInformation = ({ ip, city, country, timezone, isp }) => {
  return (
    <div className="w-full flex items-center justify-center -mb-96 ">
      <section className=" flex justify-around items-center p-10 h-[161px] rounded-lg shadow-lg font-bold text-2xl bg-white">
        <div className="flex flex-col border-r-2 pr-24 py-2">
          <h1 className="mb-4 text-gray-400">IP Address</h1>
          <p>{ip}</p>
        </div>
        <div className="flex flex-col border-r-2 ml-8 pr-24">
          <h1 className="mb-4 text-gray-400">Location</h1>
          <p>
            {city} {country}
          </p>
        </div>
        <div className="flex flex-col border-r-2 ml-8 pr-24 py-2">
          <h1 className="mb-4 text-gray-400">Timezone</h1>
          <p>{timezone}</p>
        </div>
        <div className="flex flex-col ml-8">
          <h1 className="mb-4 text-gray-400">ISP</h1>
          <p>{isp}</p>
        </div>
      </section>
    </div>
  );
};

export default IpInformation;
