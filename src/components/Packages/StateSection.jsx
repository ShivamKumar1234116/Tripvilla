import React, { useState } from "react";
import CommonSlider from "../Ui/CommonSlider";
import PackageCard from "./PackageCard";

const states = [
  {
    name: "Uttarakhand",
    img: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6",
    desc: "Mountains • Temples • Adventure",
  },
  {
    name: "Himachal Pradesh",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    desc: "Snow • Valleys • Nature",
  },
  {
    name: "Rajasthan",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada",
    desc: "Palaces • Desert • Culture",
  },
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    desc: "Beaches • Nightlife • Fun",
  },
  {
    name: "Kerala",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    desc: "Backwaters • Nature • Calm",
  },
];

function StateSection() {
  const [selectedState, setSelectedState] = useState("All");

  const filteredStates =
    selectedState === "All"
      ? states
      : states.filter((s) => s.name === selectedState);

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Explore Packages By <span className="text-orange-500">State</span>
          </h2>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="All">All States</option>
            {states.map((s, i) => (
              <option key={i} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* SLIDER */}
        <CommonSlider slidesToShow={3}>
          {filteredStates.map((state, i) => (
            <div key={i} className="px-3">
              <PackageCard data={state} />
            </div>
          ))}
        </CommonSlider>

      </div>
    </section>
  );
}

export default StateSection;
