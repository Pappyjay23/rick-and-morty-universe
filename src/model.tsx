export interface CharacterModel {
    id: number
    image: string
    name: string
    status: string
    species: string
    gender: string
    origin: { name: string }
}

export interface LocationModel {
    id: number
    name: string
    type: string
    dimension: string
    residents: []
}
