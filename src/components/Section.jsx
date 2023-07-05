import React from "react";

const Section = ({ title, subtitle }) => {
  return (
    <section className="p-10 font-bold w-fit ">
      <h1 className="text-gray-400 text-md mb-4">{title}</h1>
      <p className="text-3xl">{subtitle}</p>
    </section>
  );
};

export default Section;
