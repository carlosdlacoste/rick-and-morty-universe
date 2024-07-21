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
            <div>
                <p>Hi Characters!</p>
            </div>
        </>
    )
}

export default Characters;