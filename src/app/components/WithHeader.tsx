"use client";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType
};

export default function WithHeader({ userData }: Props) {
    const [isSideBar, setIsSideBar] = useState(false);

    useEffect(() => {
        // Add or remove the no-scroll class based on the sidebar state
        if (isSideBar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up the style when the component unmounts or sidebar state changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSideBar]);

    return (
        <>
            <Header userData={userData} isSideBar={isSideBar} setIsSideBar={setIsSideBar} />
            {isSideBar &&
                <div>
                    <SideBar userData={userData} isSideBar={isSideBar} setIsSideBar={setIsSideBar} />
                    <div className="bg-[#090909] opacity-50 fixed inset-0 box-border z-[100]" onClick={() => setIsSideBar(false)} />
                </div>
                // <SideBar userData={userData} isSideBar={isSideBar} setIsSideBar={setIsSideBar}/>
            }
        </>
    )
};
