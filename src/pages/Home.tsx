import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex  flex-col justify-center items-center h-[100vh]">
            <h1 className="text-[2rem] uppercase font-light tracking-widest">
                Welcome to the Rick and Morty Universe
            </h1>
            <div className='mt-8'>
                <Link to="/characters">
                    <button className='bg-[#000000] px-8 py-3 rounded-[8px]'>See the characters 👉</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
