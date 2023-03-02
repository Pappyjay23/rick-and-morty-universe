import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import { CharacterModel } from '../model'

const Character = () => {
    const [characters, setCharacters] = useState<[]>([])
    const [search, setSearch] = useState<string>('')
    const getCharacter = async () => {
        const { data } = await axios.get(
            'https://rickandmortyapi.com/api/character'
        )

        setCharacters(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getCharacter()
    }, [])

    const filteredCharacters = characters.filter((c: CharacterModel) =>
        c.name.toLowerCase().includes(search)
    )
    

    return (
        <div className="p-8 max-w-[1000px] mx-auto mt-[65px]">
            <div className="flex justify-end">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search a character..."
                    className="bg-black text-white outline-none border-0 rounded-md px-6 py-4 text-sm"
                />
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredCharacters.map((c: CharacterModel) => (
                    <CharacterCard character={c} key={c.id} />
                ))}
            </div>
        </div>
    )
}

export default Character
