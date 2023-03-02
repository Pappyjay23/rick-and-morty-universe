import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationCard from '../components/LocationCard'
import { LocationModel } from '../model'
import CustomPagination from '../components/CustomPagination'
import { addResidentLocation } from '../features/character'
import { useDispatch } from 'react-redux'

const Location = () => {
    const [locations, setLocations] = useState<[]>([])
    const [page, setPage] = useState<number>(1)
    const [numOfPages, setNumOfPages] = useState<number>(0)
    const dispatch = useDispatch()

    const getLocation = async () => {
        const { data } = await axios.get(
            `https://rickandmortyapi.com/api/location?page=${page}`
        )
        setLocations(data.results)
        setNumOfPages(data.info.pages)
    }

    useEffect(() => {
        getLocation()
    }, [page])


    useEffect(() => {
        dispatch(addResidentLocation(''))
    }, [])
    

    return (
        <div className="p-8 max-w-[1000px] mx-auto mt-[40px]">
            <h2 className="text-center my-4 text-[1.5rem] uppercase font-light tracking-widest">
                Locations
            </h2>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
            <div className="h-[75vh] overflow-y-scroll mt-2 characterScroll">
                <div className="flex flex-wrap justify-center">
                    {locations.map((l: LocationModel) => (
                        <LocationCard location={l} key={l.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Location
