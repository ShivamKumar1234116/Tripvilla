import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* Yaha child route ka content render hoga */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
