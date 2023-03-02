import axios from 'axios'
import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import CustomPagination from '../components/CustomPagination'
import { CharacterModel } from '../model'
import { useDispatch, useSelector } from 'react-redux'
import { addResidentLocation } from '../features/character'

const Character = () => {
    const [characters, setCharacters] = useState<[]>([])
    const [search, setSearch] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [numOfPages, setNumOfPages] = useState<number>(0)

    const dispatch = useDispatch()
    const residentLocation = useSelector(
        (state: RootState) => state.location.value
    )

    const getCharacter = async () => {
        const { data } = await axios.get(
            `https://rickandmortyapi.com/api/character/?page=${page}`
        )

        setCharacters(data.results)
        setNumOfPages(data.info.pages)
        // console.log(filteredCharacters)
        // console.log('Characters', data.results)
    }

    useEffect(() => {
        getCharacter()
        // dispatch(addCharacters(characters))
    }, [page])

    const filteredCharacters = characters.filter((c: CharacterModel) =>
        c.name.toLowerCase().includes(search)
    )

    const filteredByLocation = filteredCharacters.filter(
        (c: CharacterModel) =>
            residentLocation && c.location.name === residentLocation
    )

    return (
        <div className="p-8 max-w-[1000px] mx-auto mt-[40px]">
            <h2 className="text-center my-4 text-[1.5rem] uppercase font-light tracking-widest">
                Characters
            </h2>
            <div className="flex justify-center">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search a character..."
                    className="bg-black text-white outline-none border-0 rounded-md px-6 py-4 text-sm"
                />
                {residentLocation.length > 0 && (
                    <button
                        onClick={() => {
                            dispatch(addResidentLocation(''))
                            setPage(1)
                        }}
                        className="text-xs ml-8 bg-[#000000] px-6 py-2 rounded-[8px]"
                    >
                        View all characters
                    </button>
                )}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
            <div className="h-[65vh] overflow-y-scroll mt-2 characterScroll">
                <div className="flex flex-wrap justify-center">
                    {residentLocation.length > 0 ? (
                        filteredByLocation.length > 0 ? (
                            filteredByLocation.map((c: CharacterModel) => (
                                <CharacterCard character={c} key={c.id} />
                            ))
                        ) : (
                            <span>
                                No characters available on this page. Please
                                check the next page by clicking above.
                            </span>
                        )
                    ) : filteredCharacters.length > 0 ? (
                        filteredCharacters.map((c: CharacterModel) => (
                            <CharacterCard character={c} key={c.id} />
                        ))
                    ) : (
                        <span>
                            No characters available on this page. Please check
                            the next page by clicking above.
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Character
