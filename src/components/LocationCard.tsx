import React from 'react'
import { LocationModel } from '../model'
import LocationBg from '../assets/spaceBg.png'
import { useDispatch } from 'react-redux'
import { addResidentLocation } from '../features/character'
import { useNavigate } from 'react-router-dom'

interface Props {
    location: LocationModel
}

const LocationCard = ({ location }: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getResidents = () => {
        dispatch(addResidentLocation(location.name))
        navigate('/characters')
    }
    return (
        <>
            <div
                onClick={getResidents}
                className="relative cursor-pointer block  flex-shrink-0 scale-[.85] hover:scale-[.95] duration-500 bg-[#222935] rounded-[10px] h-[400px] w-[250px]"
            >
                <div className="bg-black/70 h-[400px] w-[250px] absolute rounded-[10px]"></div>
                <img
                    src={LocationBg}
                    alt="Movie"
                    className=" h-[400px] w-[250px] object-cover rounded-[10px]"
                />
                <div className="mt-4 flex flex-col gap-10 absolute top-0 left-0 px-4">
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Name:</span>
                        <span className="ml-2 text-gray-200 uppercase">
                            {location.name}
                        </span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">Type:</span>
                        <span className="ml-2 text-gray-200 uppercase">
                            {location.type}
                        </span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">
                            Dimension:
                        </span>{' '}
                        <span className="ml-2 text-gray-200 uppercase">
                            {location.dimension}
                        </span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium text-gray-200">
                            Number of Residents:
                        </span>{' '}
                        <span className="ml-2 text-gray-200">
                            {location.residents.length}
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LocationCard
