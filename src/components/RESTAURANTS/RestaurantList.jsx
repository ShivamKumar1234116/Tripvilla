import React from 'react'

import RestaurantsCard from './RestaurantsCard';
// import img1 from "../../assets/restaurantsimage/Pizza.webp";
// import img2 from "../../assets/restaurantsimage/red.jpg";
// import img3 from "../../assets/restaurantsimage/starbucks.jpg";
function RestaurantList({data}) {
  return (
	<>
	
	
	 
<div className="w-full flex flex-wrap justify-center gap-8 px-4">
    {data.slice(0,4).map((restaur)=>(

  
        <RestaurantsCard
          id={restaur._id}
          key={restaur._id}
          location={restaur.location.city}
          price={restaur.price}
          name={restaur.name}
          img={restaur.images[0]?.url || "https://tse2.mm.bing.net/th/id/OIP.h1ov-jfEPJieZEaHPcqd6AHaE8?pid=Api&P=0&h=180"}
          rating={restaur.rating}
          desc={restaur.description}
        />
  
     
	  ))}
    </div>
	
	</>
  )
}

export default RestaurantList
