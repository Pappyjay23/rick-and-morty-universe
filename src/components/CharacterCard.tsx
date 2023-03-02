import React from 'react'
import { CharacterModel } from '../model'

interface Props {
    character: CharacterModel
}

const CharacterCard = ({ character }: Props) => {
    return (
        <>
            <div className="relative cursor-pointer block  flex-shrink-0 scale-[.85] hover:scale-[.95] duration-500 bg-[#222935] p-3 rounded-[10px] w-[150px] lg:w-[250px]">
            <div className='bg-black/40 h-[200px] w-[130px] lg:h-[300px] lg:w-[230px] absolute rounded-[10px]'></div>
                <img
                    src={character.image}
                    alt="Character"
                    className="h-[200px] w-[150px] lg:h-[300px] lg:w-[250px] object-cover rounded-[10px] block"
                />
                <div className="mt-4 flex flex-col gap-3">
                    <p className="flex items-start">
                        <span className="font-medium">Name:</span>{' '}
                        <span className="ml-2">{character.name}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium">Status:</span>{' '}
                        <span className="ml-2">{character.status}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium">Species:</span>{' '}
                        <span className="ml-2">{character.species}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium">Gender:</span>{' '}
                        <span className="ml-2">{character.gender}</span>
                    </p>
                    <p className="flex items-start">
                        <span className="font-medium">Origin:</span>{' '}
                        <span className="ml-2">{character.origin.name}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CharacterCard
