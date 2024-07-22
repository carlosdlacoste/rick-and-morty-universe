"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCharacterStore, Character } from "@/store/characterStore";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useReactTable, ColumnDef, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";

const Characters = () => {
    const { getCharacters, characters, filter, setFilter } = useCharacterStore();
    const router = useRouter();

    useEffect(() => {
        getCharacters();
    }, []);

    const columns: ColumnDef<Character>[] = [
        { accessorKey: "id", header: "ID" },
        { accessorKey: "name", header: "Name" },
        { accessorKey: "gender", header: "Gender" },
        { accessorKey: "species", header: "Species" },
        { accessorKey: "status", header: "Status" },
        { accessorKey: "type", header: "Type" },
    ];

    const table = useReactTable({
        data: characters,
        columns,
        state: {
        globalFilter: filter,
        },
        onGlobalFilterChange: setFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <>
            <div className="container mx-auto my-8">
                <input
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                placeholder="Filter characters..."
                className="mb-4 p-2 border border-gray-300 rounded"
                />
                <Table className="bg-one rounded">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="text-black font-bold">
                                    {typeof header.column.columnDef.header === 'function'
                                    ? header.column.columnDef.header(header.getContext())
                                    : header.column.columnDef.header}
                                </TableHead>
                            ))}
                        </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                className="hover:bg-three cursor-pointer"
                                onClick={() => router.push(`/characters/${row.original.id}`)}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>{typeof cell.column.columnDef.cell === 'function'
                                        ? cell.column.columnDef.cell(cell.getContext())
                                        : cell.column.columnDef.cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default Characters;