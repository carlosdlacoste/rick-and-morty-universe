import { create } from "zustand";

export interface Episode{
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

export interface EpisodeStore{
    episodes: Episode[];
    getEpisodes: () => Promise<void>;
}

export const useEpisodeStore = create<EpisodeStore>((set) => ({
    episodes: [],
    getEpisodes: async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        const data = await response.json()
        set({ episodes: data.results })
    },

}))