import React from 'react'
import img from "../../assets/TRAVELIMG/travel.jpg";
import { FaUtensils } from "react-icons/fa"; // 🍽️ Restaurant icon
import { Link } from 'react-router-dom';
const TravelSection = () => {
 return (
    <div className='w-full'>
      {/* Info Section */}
      <div className="w-full px-4 md:px-10 py-8">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">

          {/* Left Text Section */}
          <div className="w-full md:w-1/2 p-2">
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4 text-purple-600'>
              {/* <FaUtensils className="inline-block mr-2 text-yellow-500" /> */}
              Explore the World with TripVilla
            </h2>
            <div className="space-y-4 text-base text-md leading-relaxed text-gray-700">
              <p>
                
                <span className='font-semibold'></span>Reserve train tickets with ease and get real-time seat availability, schedules, and affordable fares for a smooth journey.
              </p>
              <p>
                <span className='font-semibold'></span> Book reliable cabs anytime, anywhere — perfect for airport pickups, city rides, or outstation trips.


              </p>
              <p>
                <span className='font-semibold'></span> Choose from a wide range of cars for self-drive or chauffeur-driven trips, tailored to your travel needs.
              </p>
              <p>
                <span className='font-semibold'></span>Enjoy hassle-free pick-up and drop-off services to and from the airport, ensuring timely and comfortable travel.
              </p>
            </div>

            {/* Explore Button */}
            <div className="flex justify-center md:justify-start mt-6">
              <Link
                to="/"
                className="inline-block w-[200px] text-center px-8 py-3 text-sm font-bold text-white bg-purple-600 rounded-md shadow-lg hover:bg-gray-300 hover:text-black transition duration-300"
              >
                Explore  Services
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-[45%] h-auto flex justify-center items-center">
            <img
              src={img}
              alt="tarvel"
              className="w-full sm:w-[90%] h-[260px] sm:h-[340px] md:h-[420px] lg:h-[460px] object-cover shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      {/* <h1 className='text-2xl sm:text-3xl font-bold text-center text-purple-600 mt-10'>
        Top Rated Restaurants
      </h1> */}

      {/* Cards */}
      {/* <div className="w-full flex flex-wrap justify-center gap-6 mt-6 px-4 mb-16">
        <RestaurantCard location="Haridwar" price="1000-1500" name="Pizza Castle" img={img1} rating="4.5" />
        <RestaurantCard location="Dehradun" price="2000-3000" name="Star Bucks" img={img3} rating="5.0" />
        <RestaurantCard location="Delhi" price="5000-10000" name="Red Fort Cafe" img={img2} rating="5.0" />
        <RestaurantCard location="Delhi" price="5000-10000" name="Red Fort Cafe" img={img2} rating="5.0" />
                
      </div> */}
    </div>
  );
}

export default TravelSection
