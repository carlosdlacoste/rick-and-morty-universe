"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEpisodeStore } from "@/store/episodeStore";
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
    const { getEpisodes, episodes } = useEpisodeStore();
    const router = useRouter();
    useEffect(() => {
        getEpisodes()
    }, []);
    console.log(episodes)
    return (
        <>
            <div className="container mx-auto my-8">
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
                                episodes.map(episode => (
                                    <>
                                        <TableRow  key={episode.id} className="hover:bg-three cursor-pointer">
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