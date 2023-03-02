import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={`bg-[#0b0d12] p-4 fixed top-0 left-0 w-full z-[100]`}>
            <div className="max-w-[1000px] md:w-[80%] mx-auto flex justify-between items-center">
                <Link to="/">
                    <span className="font-bold text-xl">RMU</span>
                </Link>
                <span
                    onClick={handleNav}
                    className="cursor-pointer text-xl lg:hidden"
                >
                    <HiOutlineMenuAlt2 />
                </span>
                <div className="hidden lg:flex gap-8">
                    <Link to="/">
                        <span className="font-light">Home</span>
                    </Link>
                    <Link to="/characters">
                        <span className="font-light">Character</span>
                    </Link>
                    <Link to="/location">
                        <span className="font-light">Location</span>
                    </Link>
                </div>
                <div
                    className={`absolute top-0 w-full bg-[#0B0D12] h-screen p-4 ${
                        nav ? 'left-0' : 'left-[100%]'
                    } duration-300`}
                >
                    <div className="flex justify-end max-w-[1000px] md:w-[80%] mx-auto">
                        <span onClick={handleNav} className="cursor-pointer text-xl lg:hidden">
                            <MdClose />
                        </span>
                    </div>
                    <div className="flex flex-col items-center mt-12 gap-12">
                        <Link onClick={handleNav} to="/">
                            <span className="font-light text-xl">
                                Home
                            </span>
                        </Link>
                        <Link onClick={handleNav} to="/characters">
                            <span className="font-light text-xl">
                                Character
                            </span>
                        </Link>
                        <Link onClick={handleNav} to="/location">
                            <span className="font-light text-xl">Location</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
