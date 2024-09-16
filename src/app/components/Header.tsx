"use client";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { trpc } from "~/server/utils/trpc";
import { useRouter } from "next/navigation";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType;
    isSideBar: boolean;
    setIsSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ userData, isSideBar, setIsSideBar }: Props) {
    const [isClicked, setIsClicked] = useState(false);
    const [typing, setTyping] = useState("");
    const router = useRouter();

    const handleDropDown = () => {
        setIsClicked(prevState => !prevState);
        console.log("Acount icon is clicked");
    };

    const handleSideBar = () => {
        setIsSideBar(true);
        console.log("Click Edit Bar");
    }

    useEffect(() => {
        console.log(typing);
    }, [typing]);

    const { data: result, refetch: refetchResult } = trpc.topic.getSearchingLimits.useQuery({
        typing: typing,
    });

    useEffect(() => {
        console.log("Result: ", result);
    }, [result]);

    const handleTyping = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTyping((e.target as HTMLInputElement).value);
    };

    const url = `/search?query=${typing}`;

    // handle search
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsClicked(false);
        setTyping("");
        router.push(url);
        refetchResult();
    };

    return (
        <nav className="bg-white z-[100] top-0 left-0 right-0 w-full h-[56px] fixed box-border">
            <div className="flex items-center relative px-[0.5rem] max-w-[1380px] m-auto h-[56px] box-border">
                {/* Icon */}
                <div className="flex items-center">
                    <div className="flex breakPointEngine:hidden inline-block">
                        <button
                            className="mx-2 p-[0.5rem] bg-transparent hover:bg-engineMarkBGHover text-editColor hover:text-loginHover rounded-[0.375rem] text-center border-none "
                            onClick={handleSideBar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="akiagd5s7pl3860fbzp7yxg5owy2sfbn" className="..."><title id="akiagd5s7pl3860fbzp7yxg5owy2sfbn">Navigation menu</title>
                                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <a href={userData ? "/home" : "/"}>
                        <Image
                            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                            alt="Image Icon"
                            height={40}
                            width={50}
                        />
                    </a>
                </div>

                {/* Search Box */}
                <div className="flex flex-1-auto mx-[1rem] items-center max-w-[680px] box-border">
                    <form className="block box-border w-full" onSubmit={handleSubmit}>
                        {/* <input className="flex breakPointEngine:hidden" placeholder="Search..."/> */}
                        <div className="breakPointEngine:flex hidden flex-row flex-wrap">
                            <div className="relative flex-1 flex flex-col text-[1rem]">
                                <input
                                    type="text"
                                    id="search"
                                    className="pl-[40px] pr-[142px] leading-relaxed py-[calc(0.5rem-2.5px)] px-0.5rem text-[1rem] w-full resize-y border-[1.5px] border-borderColor appearance-none rounded-[0.375rem] transition-all duration-100 ease-custom-bezier"
                                    placeholder="Search..."
                                    // value={typing}
                                    onChange={handleTyping}
                                />
                                {/* search drop box */}
                                {typing.length > 0 &&
                                    <ul className="m-0 p-0 border-[1px] border-solid border-[#d6d6d7] rounded-[0.375rem] bg-white absolute shadow-customForCenterPage top-[41px] left-0 right-0 ">
                                        {result?.map((item, index) => {
                                            return (
                                                <li key={item.id} className={`${index === 0 && "rounded-t-[0.375rem]"} p-[8px] border-b-[1px] border-b-solid `}>
                                                    <a href={`/topic/${item.user.id}/${item.id}`}
                                                        className="...">
                                                        <div className="text-[12px] text-[#717171] ">
                                                            {item.user.id}
                                                        </div>

                                                        <strong className="text-engineBorderColor block font-bold ">
                                                            {item.title}
                                                        </strong>

                                                        <div className="text-[12px] text-[#717171]">
                                                            {"Sep 1 '22"}
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                        <div className="bg-[#efefef] text-[13px] border-t-[1px] border-t-solid border-t-engineBottomBg rounded-b-[0.375rem] py-[12px] px-[8px] flex items-baseline justify-between">
                                            <span className="text-[14px] ">
                                                Submit search for advanced filtering
                                            </span>
                                            <span className="text-engineBorderColor font-bold pl-[4px] ">
                                                Blogging
                                            </span>
                                        </div>
                                    </ul>
                                }
                                <button
                                    type="submit"
                                    className="absolute py-0 mt-0 right-auto inset-px p-[0.5rem] bg-transparent hover:bg-logInBg text-engineBorderColor hover:text-createBorderHover inline-block rounded-[0.375rem] text-center rounded-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                                        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                                    </svg>
                                </button>
                                <a
                                    className="absolute right-[8px] top-[3px] block text-[13px] text-[#717171] pl-[3px] flex items-center bg-white mt-[0.5rem] flex gap-1"
                                    href="https://www.algolia.com/developers/?utm_source=devto&amp;utm_medium=referral"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Powered by
                                    {/* <span className="sr-only w-[135.56px] h-[19.5px]">Powered by</span> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="14" height="14" viewBox="0 0 500 500.34">
                                        <path className="cls-1 fill-[#717171] align-2" d="M250,0C113.38,0,2,110.16,.03,246.32c-2,138.29,110.19,252.87,248.49,253.67,42.71,.25,83.85-10.2,120.38-30.05,3.56-1.93,4.11-6.83,1.08-9.52l-23.39-20.74c-4.75-4.22-11.52-5.41-17.37-2.92-25.5,10.85-53.21,16.39-81.76,16.04-111.75-1.37-202.04-94.35-200.26-206.1,1.76-110.33,92.06-199.55,202.8-199.55h202.83V407.68l-115.08-102.25c-3.72-3.31-9.43-2.66-12.43,1.31-18.47,24.46-48.56,39.67-81.98,37.36-46.36-3.2-83.92-40.52-87.4-86.86-4.15-55.28,39.65-101.58,94.07-101.58,49.21,0,89.74,37.88,93.97,86.01,.38,4.28,2.31,8.28,5.53,11.13l29.97,26.57c3.4,3.01,8.8,1.17,9.63-3.3,2.16-11.55,2.92-23.6,2.07-35.95-4.83-70.39-61.84-127.01-132.26-131.35-80.73-4.98-148.23,58.18-150.37,137.35-2.09,77.15,61.12,143.66,138.28,145.36,32.21,.71,62.07-9.42,86.2-26.97l150.36,133.29c6.45,5.71,16.62,1.14,16.62-7.48V9.49C500,4.25,495.75,0,490.51,0H250Z"></path>
                                    </svg>
                                    Algoria
                                </a>
                            </div>

                        </div>


                    </form>
                </div>

                {/* Profile or something */}
                <div className="flex items-center h-100 ml-auto">
                    <div className="flex breakPointEngine:hidden">
                        {/* search icon */}
                        <Link
                            href={url}
                            className="bg-white text-engineBorderColor font-[700] mx-1 p-[0.5rem] inline-block rounded-[0.375rem] w-full hover:text-createBorderHover hover:bg-engineMarkBGHover"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="..." focusable="false">
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                            </svg>
                        </Link>
                    </div>
                    {!userData &&
                        <span className="block breakPointEngine:flex hidden">
                            <Link
                                href={userData ? "/api/auth/signout" : "/api/auth/signin"}
                                className="flex items-center mr-2 justify-center bg-transparent hover:bg-logInBg text-loginText hover:text-loginHover px-[calc(1.3rem-2.1px)] py-[calc(0.5rem-1px)] rounded-[0.375rem] border border-transparent hover:border-logInHover"
                            >
                                {userData ? "Log out" : "Log in"}
                            </Link>
                        </span>
                    }

                    <span className={userData ? "breakPointEngine:flex hidden" : "..."}>
                        <Link
                            href={userData ? `/create-post/${userData.id}` : "/api/auth/signin"}
                            className="flex items-center mr-[0.5rem] justify-center bg-transparent hover:bg-createAccountBG text-createAccountBG hover:text-white border-createAccountBG hover:border-createBorderHover border-[1px] px-[calc(1rem-1px)] py-[calc(0.5rem-1px)] rounded-[0.375rem]"
                        >
                            {userData ? "Create post" : "Create account"}
                        </Link>
                    </span>
                    <span className={userData ? "flex" : "hidden"}>
                        <a
                            href="#"
                            className="ml-1 mr-1 p-[0.5rem] inline-block bg-white text-engineBorderColor rounded-[0.375rem] w-full hover:text-createBorderHover hover:bg-engineMarkBGHover"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ag67jryrrxfeudbtdh5exqkxj1our9kb" className="..."><title id="ag67jryrrxfeudbtdh5exqkxj1our9kb">Notifications</title>
                                <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                            </svg>
                        </a>
                    </span>
                    <span className={userData ? "flex" : "hidden"}>
                        <div className="mx-1" onClick={handleDropDown}>
                            <button
                                type="button"
                                className="items-center flex p-1 rounded-full bg-transparent hover:text-createBorderHover hover:bg-engineMarkBGHover text-editColor text-center"
                            >
                                <Image
                                    src={userData?.image ?? ""}
                                    alt={userData?.name ?? ""}
                                    width={32}
                                    height={32}
                                    className="rounded-full h-8 w-8 inline-block align-bottom"
                                />
                                {/* <img src={userData?.image ?? ""} alt={userData?.name ?? ""} style={{borderRadius: "50%", width: "100%", height: "auto"}} /> */}
                            </button>
                            {/* {isClicked &&
                                <div
                                    className="absolute z-10 sm:left-auto left-2 right-2 inline-block bg-white text-engineBorderColor rounded-[0.375rem] shadow-xl p-[0.5rem] top-full mt-[0.25rem] sm:max-w-[360px] sm:w-full min-w-[250px]"
                                >
                                    <ul className="block">
                                        <li className="text-left pb-2 mb-2 border-b-1 border-0 border-solid border-[#d6d6d7]">
                                            <a
                                                href="#"
                                                className="leading-5 bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                            >
                                                <div>
                                                    <span className="block font-[500] ">{userData?.name}</span>
                                                    <span className="text-[0.875rem] opacity-75">{userData?.id}</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            } */}
                        </div>
                    </span>
                </div>
                {isClicked &&
                    <div
                        className="absolute z-[100] sm:w-[250px] sm:left-auto left-2 right-2 inline-block bg-white text-engineBorderColor rounded-[0.375rem] shadow-xl p-[0.5rem] top-full mt-[0.25rem] sm:max-w-[250px] sm:w-full min-w-[250px]"
                    >
                        <ul className="block">
                            <li className="text-left pb-2 mb-2 border-b border-0 border-solid border-[#d6d6d7]">
                                <a
                                    href={`/profile/${userData?.id}`}
                                    className="leading-5 bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    <div>
                                        <span className="block font-[500] ">{userData?.name}</span>
                                        <span className="text-[0.875rem] opacity-75">{userData?.id}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href={userData ? `/create-post/${userData.id}` : "/"}
                                    className="bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    Create Post
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    Reading List
                                </a>
                            </li>
                            <li className="pb-2 border-b border-0 border-solid border-[#d6d6d7]">
                                <a
                                    href="#"
                                    className="bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    Settings
                                </a>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="/api/auth/signout"
                                    className="bg-transparent hover:bg-engineMarkBGHover text-loginText hover:text-createBorderHover flex px-[1rem] py-[0.5rem] relative rounded-[0.375rem] w-full"
                                >
                                    Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
}
