import React from "react";

function PackageCard({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all relative overflow-hidden">

      {/* DAY / NIGHT BADGE */}
      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
        5D / 4N
      </span>

      {/* IMAGE */}
      <img
        src={data.img}
        alt={data.name}
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-base">{data.name}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default PackageCard;
