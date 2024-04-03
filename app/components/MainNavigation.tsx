import { NavLink } from '@remix-run/react'
const MainNavigation = () => {
    return (
        <nav id="main-navigation" className='p-4'>
            <ul className='flex justify-around align-center'>
                <li className="text-2xl font-semibold rounded-sm hover:bg-orange-50 p-2">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-2xl font-semibold rounded-sm hover:bg-orange-50 p-2">
                    <NavLink to="/books">Add Books</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation
