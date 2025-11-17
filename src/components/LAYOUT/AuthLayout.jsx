import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function AuthLayout() {
  return (
    <div>
      <Navbar />   {/* ✅ Only Navbar, no Footer */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
