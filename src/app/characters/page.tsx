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
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Species</TableHead>
                    <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            characters.map(character => (
                                <>
                                    <TableRow>
                                        <TableCell key={character.id}>{character.id}</TableCell>
                                        <TableCell>{character.name}</TableCell>
                                        <TableCell>{character.gender}</TableCell>
                                        <TableCell>{character.species}</TableCell>
                                        <TableCell>{character.status}</TableCell>
                                    </TableRow>
                                </>
                            ))
                        }
                </TableBody>
            </Table>
        </>
    )
}

export default Characters;