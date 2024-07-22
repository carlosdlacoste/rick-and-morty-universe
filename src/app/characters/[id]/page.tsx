"use client"
import { useCharacterStore } from "@/store/characterStore"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const CharacterDetails = () =>{
    const router = useRouter()
    const params = useParams()
    const id = params.id
    const characters = useCharacterStore((state) => state.characters)
    const character = characters.find((char) => char.id === Number(id))
    // console.log(character?.image)

    return(
        <>
            <div  className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">

                <Card className="w-2/5 h-3/5 shadow-lg">
                    <div className="flex flex-col justify-center items-center">
                        <CardHeader>
                            <CardTitle>{character?.name}</CardTitle>
                        </CardHeader>
                        <img src={character?.image} alt="Character icon" width={150} height={150} className="rounded-full"/>
                        <CardContent>
                            <div className="flex flex-col items-center py-4">

                                <p className="text-sm">Gender: <span className="font-bold">{character?.gender}</span></p>
                                <p className="text-sm">Species: <span className="font-bold">{character?.species}</span></p>
                                <p className="text-sm">Status: <span className="font-bold">{character?.status}</span></p>
                                <p className="text-sm">Type: <span className="font-bold">{character?.type == ''? 'classified': character?.type}</span></p>
                            </div>

                        </CardContent>
                    </div>
                </Card>
            </div>
        </>
    )

}

export default CharacterDetails