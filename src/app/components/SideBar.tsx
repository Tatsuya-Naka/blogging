"use client"
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

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

export default function SideBar({ userData, isSideBar, setIsSideBar }: Props ) {
    const handleSideBar = () => {
        setIsSideBar(false);
        console.log("Close SideBar");
    }

    return (
        <div className="block fixed inset-0 z-[200] box-border">
            <div className="bg-white max-w-[300px] w-10/12 z-1 fixed h-full overflow-y-auto ">
                <div className="min-h-[56px] flex items-center justify-between pr-[0.5rem] pl-[1rem] ">
                    <h2 className="break-word flex-1 font-[700] leading-[1.25] text-[1.125rem] ">DEV Community</h2>
                    <button onClick={handleSideBar} className="shring-0 p-[0.5rem] bg-transparent hover:bg-engineMarkBGHover text-editColor hover:text-loginHover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac3vp0fhgzarlals99dfsci0rp7zqo8p" aria-hidden="true" className="..."><title id="ac3vp0fhgzarlals99dfsci0rp7zqo8p">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
                    </button>
                </div>

                <div className="p-2 block">
                    <div>
                        {!userData &&
                            <div className="p-4 bg-white text-loginText rounded-custom shadow-custom-light-border">
                                <h2
                                    className="leading-[1.1125rem] mb-4 sm:text-[1.25rem] text-[1.1125rem] sm:leading-[1.25] font-[700] text-[#242424]"
                                >
                                    DEV Community is a community of 2,002,061 amazing developers
                                </h2>
                                <p
                                    className="mb-4 text-[#575757]"
                                >
                                    We are a place where coders share, stay up-to-date and grow their careers.
                                </p>
                                <div className="box-border flex flex-col items-center">
                                    <Link
                                        href={userData ? "/api/auth/signout" : "/api/auth/signin"}
                                        className="mb-1 w-full justify-center bg-transparent hover:bg-createAccountBG text-createAccountBG hover:text-white border-createAccountBG hover:border-createBorderHover font-[500] border-[1px] border-solid 
                                px-[calc(1rem-1px)] py-[calc(0.5rem-1px)] rounded-[0.375rem] text-center inline-flex relative  
                            "
                                    >
                                        {userData ? "Sign out" : "Create account"}
                                    </Link>
                                    <Link
                                        href={userData ? "/api/auth/signout" : "/api/auth/signin"}
                                        className="justify-center bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem]
                                relative rounded-[0.375rem] w-full
                            "
                                    >
                                        {userData ? "Logout " : "Login"}
                                    </Link>

                                </div>
                            </div>
                        }

                        <nav className="mb-4 mt-4">
                            <ul className="m-0 p-0 block">
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                {/* <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
                                                    <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                                                    <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                                                    <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
                                                    <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
                                                    <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                                                    <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
                                                    <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Home
                                    </a>
                                </li> */}
                            </ul>
                        </nav>

                        <nav className="mb-4 block">
                            <h2
                                className="pl-3 py-2 text-[1rem] leading-[1.5] font-[700] text-[#242424] "
                            >
                                Other
                            </h2>
                            <ul className="m-0 p-0">
                                {/* <li
                                >
                                    <Link
                                        href="/home"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center "
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem*-1}]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"></path>
                                                    <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Code of Conduct
                                    </Link>
                                </li>
                                <li
                                >
                                    <Link
                                        href="/home"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center "
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem*-1}]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"></path>
                                                    <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Code of Conduct
                                    </Link>
                                </li>
                                <li
                                >
                                    <Link
                                        href="/home"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center "
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem*-1}]"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                                                <g className="nc-icon-wrapper">
                                                    <path fill="#FFDB5E" d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"></path>
                                                    <path fill="#EE9547" d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Code of Conduct
                                    </Link>
                                </li> */}
                            </ul>
                        </nav>

                        <div
                            className="flex mb-4 justify-start "
                        >
                            <Link
                                href="https://x.com/i/flow/login"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <FaXTwitter className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <FaInstagram className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <AiOutlineFacebook className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://github.com/"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://www.twitch.tv/thepracticaldev"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <FaTwitch className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://x.com/i/flow/login"
                                className="p-[0.5rem] inline-block bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex relative w-full "
                            >
                                <FaXTwitter className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};