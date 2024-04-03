import React from 'react'
import UserArea from './UserArea'
import MainNavigation from '../MainNavigation'
const SiteHeader = () => {
    return (
        <header className="flex justify-between  align-center h-300px bg-white headerContainer py-5 bg-amber-100">
            <div className="container pt-3 sm:px-8 mx-auto h-14 flex items-center justify-between gap-4">
                <img
                    src="https://www.weareteachers.com/wp-content/uploads/Best-Library-Resources-for-Teachers.jpg"
                    alt="Library Resources"
                    width={150}
                    height="100%"
                    title='Library'
                />
                <MainNavigation />
                <UserArea />
            </div>
        </header>
    )
}

export default SiteHeader
