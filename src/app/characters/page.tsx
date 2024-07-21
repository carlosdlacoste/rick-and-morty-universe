"use client"
import { useEffect } from "react";

const Characters = () =>{
    useEffect(() => {
        const loadCharacters = async () =>{
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            console.log(data);
        }
        loadCharacters();
    }, []);
}

export default Characters;