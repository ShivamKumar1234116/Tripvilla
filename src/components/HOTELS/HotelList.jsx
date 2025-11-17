import React from 'react'
import HotelCard from './HotelCard';

function HotelList({ hotels }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 px-4">
      {hotels.slice(0, 4).map((hotel) => (   // 👈 sirf 5 hotels show karne ke liye
        <HotelCard
          key={hotel._id}
           _id={hotel._id}
          location={hotel.location.city}
          price={hotel.price}
          name={hotel.name}
         img={hotel.images?.[0]?.url || "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"}   // backend me agar image ka url aata hai
          rating={hotel.rating}
          desc={hotel.description}
        />
      ))}
    </div>
  );
}

export default HotelList;
