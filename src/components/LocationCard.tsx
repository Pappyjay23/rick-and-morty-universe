import React from 'react'
import { LocationModel } from '../model'
import LocationBg from '../assets/spaceBg.png'

interface Props {
    location: LocationModel
}

const LocationCard = ({location}: Props) => {
    return (
        <>
            <div className="relative cursor-pointer block  flex-shrink-0 scale-[.85] hover:scale-[.95] duration-500 bg-[#222935] rounded-[10px] h-[300px] lg:h-[400px] w-[150px] lg:w-[250px]">
                <div className='bg-black/60 h-[300px] lg:h-[400px] w-[150px] lg:w-[250px] absolute rounded-[10px]'></div>
                <img
                    src={LocationBg}
                    alt="Movie"
                    className=" h-[300px] lg:h-[400px] w-[150px] lg:w-[250px] object-cover rounded-[10px] block"
                />
                <div className="mt-4 flex flex-col gap-10 absolute top-0 left-0 px-4">
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Name:</span>{' '}
                        <span className="ml-2 text-gray-200">{location.name}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Type:</span>{' '}
                        <span className="ml-2 text-gray-200">{location.type}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Dimension:</span>{' '}
                        <span className="ml-2 text-gray-200">{location.dimension}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Number of Residents:</span>{' '}
                        <span className="ml-2 text-gray-200">{location.residents.length}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LocationCard
