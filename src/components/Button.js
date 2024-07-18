import React from "react";

const Button = ({ color, colorr, name, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-${width} h-14 py-1 px-3 border border-black text-black font-semibold bg-white cursor-pointer hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-${colorr}`}>
      <span className={`absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-${color} z-0`}></span>
      <span className="absolute inset-0 border border-black bg-white z-10"></span>
      <span className="relative z-20 font-caprasimo font-semibold text-[24px]">{name}</span>
    </button>
  );
};

export default Button;