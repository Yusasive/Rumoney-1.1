import React from "react";

export default function Product(props) {
  return (
    <div className="border rounded-xl border-rumoney10 mx-16 sm:mx-4 shadow-rumoney10 shadow-lg mb-8">
      <img
        className="rounded-full object-none object-center w-20 h-20 m-auto"
        src={props.url}
        alt="product"
        loading="lazy"
      />
      <h2 className="text-black60 text-center text-lg font-bold">
        {props.name}
      </h2>
      <p className="text-black50 text-center text-md font-medium px-1 pb-1">
        {props.description}
      </p>
    </div>
  );
}
