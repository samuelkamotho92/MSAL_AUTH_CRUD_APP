import { Outlet } from "@remix-run/react";
const Favorite = () => {
  return (
<div>
<header className="flex justify-between align-center m-auto">
    <h2>Home</h2>
    <h3>Log out</h3>
</header>
<main>
    <Outlet />
</main>
<footer>Reader Dashboard</footer>
        </div>
  )
}

export default Favorite
