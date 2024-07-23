"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCharacterStore } from "@/store/characterStore";
import { useAuthStore } from "@/store/authStore";
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
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
    const { getCharacters, characters, filter, setFilter } = useCharacterStore();
    const { token} = useAuthStore();
    const { toast } = useToast();
    const router = useRouter();
    useEffect(() => {
        // const userIsAuthenticated = () =>{
        //     if (!token){
            //         toast({
                //             variant: "destructive",
                //             title: "Authentication required",
                //             description: "Please log in to access this page.",
                //             duration: 4000,
                //         });
                //         router.push("/login");
        //     }
        //     else getCharacters()
        // }
        // userIsAuthenticated()
        getCharacters()
    }, []);

    const filteredCharacters = characters.filter((character) => {
        const searchTerm = filter.toLowerCase();
        return (
            character.name.toLowerCase().includes(searchTerm) ||
            character.gender.toLowerCase().includes(searchTerm) ||
            character.species.toLowerCase().includes(searchTerm) ||
            character.status.toLowerCase().includes(searchTerm) ||
            character.type.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <>
        {
            token &&
            <div className="container mx-auto my-8">
                <div className="flex justify-center items-center">

                    <Input
                    type="text"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    placeholder="Filter characters..."
                    className="mb-4 p-2 border border-gray-300 rounded w-1/3 h-1/3 ring-1 ring-inset ring-one focus:ring-2 focus:ring-inset focus:ring-one sm:text-sm sm:leading-6"
                    />
                </div>
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
                                filteredCharacters.map((character, index) => (
                                    <>
                                        <TableRow  key={index} className="hover:bg-three cursor-pointer" onClick={() => router.push(`/characters/${character.id}`)}>
                                            <TableCell>{character.id}</TableCell>
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
        }
        </>
    )
}

export default Characters;