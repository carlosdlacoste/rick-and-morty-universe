import { create } from "zustand";

export interface Episode{
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

export interface EpisodeStore{
    episodes: Episode[];
    filter: string;
    getEpisodes: () => Promise<void>;
    setFilter: (filter: string) => void;
}

export const useEpisodeStore = create<EpisodeStore>((set) => ({
    episodes: [],
    filter: '',
    getEpisodes: async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode')
        const data = await response.json()
        set({ episodes: data.results })
    },
    setFilter: (filter) => set({ filter }),
}))