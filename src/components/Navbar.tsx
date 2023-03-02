import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-[#0b0d12] p-4 fixed top-0 left-0 w-full z-[100]">
            <div className="max-w-[1000px] mx-auto flex justify-between items-center">
                <Link to="/">
                    <span className="font-bold text-xl">RMU</span>
                </Link>
                <div className='flex gap-8'>
                    <Link to="/characters">
                        <span className="font-light">Character</span>
                    </Link>
                    <Link to="/location">
                        <span className="font-light">Location</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
