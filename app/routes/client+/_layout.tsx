import { Outlet } from "@remix-run/react";

export default function Layout(){

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
    );
}