import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LocationCard from '../components/LocationCard'
import { LocationModel } from '../model'

const Location = () => {
    const [locations, setLocations] = useState<[]>([])
    const getLocation = async () => {
        const { data } = await axios.get(
            'https://rickandmortyapi.com/api/location'
        )
        setLocations(data.results)
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <div className="p-8 max-w-[1000px] mx-auto mt-[65px]">
            <h2 className='text-center my-4 text-[1.5rem] uppercase font-light tracking-widest'>Locations</h2>
            <div className="flex justify-end"></div>
            <div className="flex flex-wrap justify-center">
                {locations.map((l: LocationModel) => (
                    <LocationCard location={l} key={l.id} />
                ))}
            </div>
        </div>
    )
}

export default Location
