"use client"
import { useEffect } from "react";
import { useEpisodeStore } from "@/store/episodeStore";
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"

const Episodes = () =>{
    const { getEpisodes, episodes, filter, setFilter } = useEpisodeStore();
    useEffect(() => {
        getEpisodes()
    }, []);

    const filteredEpisodes = episodes.filter((episode) => {
        const searchTerm = filter.toLowerCase();
        return (
            episode.name.toLowerCase().includes(searchTerm) ||
            episode.air_date.toLowerCase().includes(searchTerm) ||
            episode.episode.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <>
            <div className="container mx-auto my-8">
                <div className="flex justify-center items-center">

                    <Input
                    type="text"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    placeholder="Filter episodes..."
                    className="mb-4 p-2 border border-gray-300 rounded w-1/3 h-1/3 ring-1 ring-inset ring-one focus:ring-2 focus:ring-inset focus:ring-one sm:text-sm sm:leading-6"
                    />
                </div>
                <Table className="bg-one rounded">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-black font-bold">ID</TableHead>
                            <TableHead className="text-black font-bold">Name</TableHead>
                            <TableHead className="text-black font-bold">Air Date</TableHead>
                            <TableHead className="text-black font-bold">Episode</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {
                                filteredEpisodes.map((episode, index) => (
                                    <>
                                        <TableRow  key={index} className="hover:bg-three cursor-pointer">
                                            <TableCell>{episode.id}</TableCell>
                                            <TableCell className="no-underline hover:underline hover:text-two">{episode.name}</TableCell>
                                            <TableCell>{episode.air_date}</TableCell>
                                            <TableCell>{episode.episode}</TableCell>
                                        </TableRow>
                                    </>
                                ))
                            }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Episodes;