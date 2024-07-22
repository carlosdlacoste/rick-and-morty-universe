"use client"
import { useCharacterStore } from "@/store/characterStore"
import { useRouter, useParams } from "next/navigation"

const CharacterDetails = () =>{
    const router = useRouter()
    const params = useParams()
    const id = params.id
    const characters = useCharacterStore((state) => state.characters)
    const character = characters.find((char) => char.id === Number(id))

    return(
        <>
            <p className="text-center">Hola soy: {character?.name}</p>
        </>
    )

}

export default CharacterDetails