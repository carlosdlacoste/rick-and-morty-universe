import { create } from "zustand";

export interface Character{
    id: number;
    name: string;
    gender: string;
    species: string;
    image: string;
    status: string;
    type: string;
    url: string;
}

export interface CharacterStore{
    characters: Character[];
    getCharacters: () => Promise<void>;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
    characters: [],
    getCharacters: async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        set({ characters: data.results })
    },

}))