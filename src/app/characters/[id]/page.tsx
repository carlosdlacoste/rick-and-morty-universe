"use client"
import { useCharacterStore } from "@/store/characterStore"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/authStore";
import Image from "next/image"
import backIcon from "../../../../public/icons/back-icon.svg"
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
    const { token} = useAuthStore();
    const params = useParams()
    const id = params.id
    const characters = useCharacterStore((state) => state.characters)
    const character = characters.find((char) => char.id === Number(id))
    // console.log(character?.image)

    return(
        <>
            {
                token &&
                <div  className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">

                    <Card className="w-2/5 h-3/5 shadow-lg bg-two">
                        <div className="flex flex-col justify-center items-center">
                            <CardHeader>
                                <CardTitle className="text-three">{character?.name}</CardTitle>
                            </CardHeader>
                            <img src={character?.image} alt="Character icon" width={150} height={150} className="rounded-full"/>
                            <CardContent>
                                <div className="flex flex-col items-center py-4 space-y-1">

                                    <p className="text-sm font-bold">Gender: <span className="font-bold text-three">{character?.gender}</span></p>
                                    <p className="text-sm font-bold">Species: <span className="font-bold text-three">{character?.species}</span></p>
                                    <p className="text-sm font-bold">Status: <span className="font-bold text-three">{character?.status}</span></p>
                                    <p className="text-sm font-bold">Type: <span className="font-bold text-three">{character?.type == ''? 'classified': character?.type}</span></p>
                                </div>

                            </CardContent>
                        </div>
                    </Card>
                    <div className="flex justify-center items-center w-2/5">
                        <Button onClick={() => router.back()} className="flex items-center space-x-2 mt-4 w-1/4 bg-three text-black font-bold hover:bg-one">
                            <Image src={backIcon} alt="Back icon" width={20} height={20} />
                            <span>Back</span>
                        </Button>
                    </div>
                </div>
            }
        </>
    )

}

export default CharacterDetails