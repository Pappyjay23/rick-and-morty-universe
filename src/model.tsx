export interface CharacterModel {
    id: number
    image: string
    name: string
    status: string
    species: string
    gender: string
    url: string
    location: { name: string }
    origin: { name: string }
}

export interface LocationModel {
    id: number
    name: string
    type: string
    dimension: string
    residents: []
}
