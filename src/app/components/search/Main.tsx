'use client';
import WithHeader from "../WithHeader";
import SearchResult from "./SearchResult";
import { useState } from "react";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType,
};

export default function MainSearch({ userData }: Props) {

    return (
        <>
            <WithHeader userData={userData} />
            <main className="min-h-screen text-[18px] pt-[56px] box-border bg-bg w-full h-full block ">
                <SearchResult userData={userData} />
            </main>
            <footer
                className="p-[3rem] bg-engineMarkBG text-loginText"
            >
                <div className="py-[0.25rem] max-width-[1380px] mx-auto flex flex-col gap-[0.5rem] ">
                    <div className="text-center">
                        <p className="font-bold mb-[10px] ">
                            Thank you to our Diamond Sponsor Neon for supporting our community.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
};