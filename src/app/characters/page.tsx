"use client"
import { useEffect } from "react";
import { useCharacterStore } from "@/store/characterStore";

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