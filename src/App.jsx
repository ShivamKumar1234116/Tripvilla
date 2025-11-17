import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/LAYOUT/Layout';
import AuthLayout from './components/LAYOUT/AuthLayout'; // ✅ new import
import Home from './PAGES/Home';
import Aboutus from './components/LAYOUT/Aboutus';
import Feedback from './components/LAYOUT/Feedback';
import HotelDetail from './components/HOTELS/HotelDetail';
import RestaurantFilter from './components/RESTAURANTS/RestaurantFilter';
import HotelFilter from './components/HOTELS/HotelFilter';
import FilterDes from './components/TRAVELS/FilterDes';
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import RestaurantDetail from './components/RESTAURANTS/RestaurantDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public pages with Navbar + Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="FilterDes" element={<FilterDes />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="RestaurantFilter" element={<RestaurantFilter />} />
          <Route path="HotelFilter" element={<HotelFilter />} />
          <Route path="hotel/HotelDetail/:id" element={<HotelDetail />} />
          <Route path="restaurant/RestaurantDetail/:id" element={<RestaurantDetail />} />
          <Route path="Aboutus" element={<Aboutus />} />
        </Route>

        {/* ✅ Auth pages with only Navbar (no Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
