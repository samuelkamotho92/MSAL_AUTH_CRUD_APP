import { Outlet } from "@remix-run/react";

import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <header>Navbar</header>
      <Outlet />
    </div>
  )
}

export default Dashboard
