"use client"
import { useEffect } from "react";
import { useCharacterStore } from "@/store/characterStore";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    } from "@/components/ui/table"

const Characters = () =>{
    const { getCharacters, characters } = useCharacterStore();
    useEffect(() => {
        getCharacters()
    }, []);
    console.log(characters)
    return (
        <>
            <div className="container mx-auto my-8">
                <Table className="bg-one rounded">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-black font-bold">ID</TableHead>
                            <TableHead className="text-black font-bold">Name</TableHead>
                            <TableHead className="text-black font-bold">Gender</TableHead>
                            <TableHead className="text-black font-bold">Species</TableHead>
                            <TableHead className="text-black font-bold">Status</TableHead>
                            <TableHead className="text-black font-bold text-center">Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {
                                characters.map(character => (
                                    <>
                                        <TableRow className="hover:bg-three cursor-pointer">
                                            <TableCell key={character.id}>{character.id}</TableCell>
                                            <TableCell className="no-underline hover:underline hover:text-two">{character.name}</TableCell>
                                            <TableCell>{character.gender}</TableCell>
                                            <TableCell>{character.species}</TableCell>
                                            <TableCell>{character.status}</TableCell>
                                            <TableCell className="text-center">{character.type == '' ? "classified": character.type}</TableCell>
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

export default Characters;