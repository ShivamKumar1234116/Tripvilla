import React from "react";
import PackageCard from "../../components/Packages/PackageCard";

const PackageList = () => {
  // Abhi dummy data (baad me API se aayega)
  const packages = [
    {
      _id: "1",
      title: "Uttarakhand Adventure Tour",
      location: "Uttarakhand",
      duration: "5D / 4N",
      price: 8999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
      _id: "2",
      title: "Mussoorie & Nainital Trip",
      location: "Uttarakhand",
      duration: "4D / 3N",
      price: 7499,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
    }
  ];

  return (
    <div className="p-6">
      {/* <h2 className="text-2xl font-semibold mb-6">
        Uttarakhand Tour Packages
      </h2> */}

      {/* 👇 YAHAN PackageCard USE HOGA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg._id} data={pkg} />
        ))}
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg._id} data={pkg} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
