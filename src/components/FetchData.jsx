// import React from "react";
// import Header from "./Header";
// import { useEffect, useState } from "react";

// const FetchData = ({ ip, onFetchData }) => {
//   const apiRequestIpAddress = `https://geo.ipify.org/api/v2/country?apiKey=at_lfXFjIhblegGEefvocS4Ko7hkRWfM&ipAddress=${ip}`;

//   const [ipData, setIpData] = useState(null);
//   const [ipAddress, setIpAddress] = useState(null);
//   const [region, setRegion] = useState(null);
//   const [country, setCountry] = useState(null);
//   const [timezone, setTimeZone] = useState(null);
//   const [isp, setIsp] = useState(null);

//   useEffect(() => {
//     const getIpData = async () => {
//       try {
//         const response = await fetch(apiRequestIpAddress);
//         if (response.ok) {
//           const result = await response.json();
//           setIpData(result);
//           setIpAddress(result.ip);
//           setRegion(result.location.region);
//           setCountry(result.location.country);
//           setTimeZone(result.location.timezone);
//           setIsp(result.isp);
//           onFetchData(result);
//         } else {
//           // Handle error response
//           console.error("Error:", response.status);
//         }
//       } catch (error) {
//         // Handle fetch error
//         console.error("Fetch Error:", error);
//       }
//     };

//     getIpData();
//   }, []);
//   return (
//     <>
//       <h1 className="text-red-500">{ip}</h1>
//       <main className="flex justify-between">
//         <div>{ipAddress}</div>
//         <div>{region}</div>
//         <div>{country}</div>
//         <div>{timezone}</div>
//         <div>{isp}</div>
//       </main>
//       <Header userIpAddress={ipAddress}></Header>
//     </>
//   );
// };

// export default FetchData;
