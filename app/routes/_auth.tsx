import React from 'react'
import { Outlet } from '@remix-run/react'
const authentication = () => {
  return (
    <div>
      <header>
        Create account
      </header>
<main>
    <Outlet />
</main>
      <footer>2024</footer>
    </div>
  )
}

export default authentication
