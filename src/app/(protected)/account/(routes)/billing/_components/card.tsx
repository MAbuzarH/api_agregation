"use client";
import React from "react";
import { checkout } from "../../../../../../lib/checkout";

interface IProps {
  credits: string;
  price: string;
  pptokens: string;
  sale?: string;
}

function Card({ credits, price, pptokens, sale }: IProps) {
  return (
    <div
      onClick={() => {
        checkout({ price: "" ,quantity:1});
      }}
      className="flex items-center justify-around flex-col rounded-lg shadow-lg cursor-pointer px-7 py-8 border-2 border-gray-300 hover:scale-105 transition-all duration-500 ease-in-out my-2"
    >
      <p className="text-blue-600 mb-2">{credits} Credits</p>
      <p className="text-sm mb-2">{price} $</p>
      <p className="text-sm mb-2">(${pptokens} / TN)</p>
      {sale && (
        <p className=" text-xs p-1 mt-2 bg-blue-100 text-blue-500 rounded-sm">
          {sale} % OFF
        </p>
      )}
    </div>
  );
}

export default Card;
