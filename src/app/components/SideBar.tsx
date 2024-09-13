"use client"
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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

export default function SideBar({ userData, isSideBar, setIsSideBar }: Props) {
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
                                <li>
                                    <a
                                        href="/"
                                        className="bg-transparent hover:bg-logInBg textloginText hover:text-loginHover flex py-[0.5rem] px-[1rem] relative rounded-[0.375rem] w-full items-center"
                                    >
                                        <span
                                            className="mr-[0.5rem] ml-[calc(0.5rem * -1)]"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 166 102"
                                                preserveAspectRatio="xMidYMid meet"
                                                className="w-[24px] h-[24px]" // Tailwind example classes for width and height, adjust as needed
                                                fill="#3b49df"
                                            >
                                                <g transform="translate(0,102) scale(0.1,-0.1)" fill="#3b49df" stroke="none">
                                                    <path
                                                        d="M305 953 c-42 -22 -64 -43 -83 -78 -14 -25 -18 -76 -22 -305 -7 -313
          -12 -336 -96 -450 -24 -33 -44 -62 -44 -65 0 -3 318 -4 708 -3 l707 3 47 27
          c32 20 52 41 67 72 21 43 22 54 19 374 l-3 330 -31 39 c-61 76 -30 73 -669 73
          -500 -1 -574 -3 -600 -17z m405 -278 l0 -84 83 -3 82 -3 0 -75 0 -75 -82 -3
          -83 -3 0 -84 0 -85 -75 0 -75 0 0 85 0 85 -75 0 c-41 0 -75 3 -75 8 0 4 8 39
          18 77 l18 70 57 3 57 3 0 84 0 85 75 0 75 0 0 -85z m578 -2 l3 -82 82 -3 82
          -3 0 -75 0 -75 -82 -3 -82 -3 -3 -82 -3 -82 -75 0 -75 0 -3 83 -3 82 -79 0
          -80 0 0 80 0 80 80 0 80 0 0 78 c0 43 3 82 7 86 4 4 39 5 78 4 l70 -3 3 -82z"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        DEV++
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
                                                <g className="h-[24px] w-[24px] align-middle">
                                                    <path fill="#67757F" d="M39 24c0 2.209-1.791 2-4 2H9c-2.209 0-4 .209-4-2l2-12c.125-1.917 1.791-4 4-4h22c2.209 0 3.791 2.208 4 4l2 12z"></path>
                                                    <path fill="#CCD6DD" d="M32 17a2 2 0 01-2 2H14a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v8z"></path>
                                                    <path fill="#E1E8ED" d="M34 21a2 2 0 01-2 2H12a2 2 0 01-2-2v-8a2 2 0 012-2h20a2 2 0 012 2v8z"></path>
                                                    <path fill="#F5F8FA" d="M36 25a2 2 0 01-2 2H10a2 2 0 01-2-2v-8a2 2 0 012-2h24a2 2 0 012 2v8z"></path>
                                                    <path fill="#9AAAB4" d="M39 35a4 4 0 01-4 4H9a4 4 0 01-4-4V24a4 4 0 014-4h26a4 4 0 014 4v11z"></path>
                                                    <path fill="#67757F" d="M18 16zm0 0z"></path>
                                                    <path fill="#FCAB40" d="M26 5h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2V7a2 2 0 00-2-2z"></path>
                                                    <path fill="#5DADEC" d="M22 9h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2v-1a2 2 0 00-2-2z"></path>
                                                    <path fill="#E75A70" d="M20 16a2 2 0 01-2 2h-5a2 2 0 01-2-2v-1a2 2 0 012-2h5a2 2 0 012 2v1z"></path>
                                                    <path fill="#67757F" d="M29 32a2 2 0 01-2 2H17a2 2 0 01-2-2v-5a2 2 0 012-2h10a2 2 0 012 2v5zm-11-4z"></path>
                                                    <path fill="#E1E8ED" d="M27 31a1 1 0 01-1 1h-8a1 1 0 01-1-1v-3a1 1 0 011-1h8a1 1 0 011 1v3z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Reading List
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
                                                <g className="h-[24px] w-[24px] align-middle">
                                                    <path fill="#292F33" d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"></path>
                                                    <path fill="#66757F" d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"></path>
                                                    <path fill="#99AAB5" d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"></path>
                                                    <g fill="#292F33" transform="translate(4 4)">
                                                        <circle cx="15.5" cy="2.5" r="1.5"></circle>
                                                        <circle cx="20.5" cy="2.5" r="1.5"></circle>
                                                        <circle cx="17.5" cy="6.5" r="1.5"></circle>
                                                        <circle cx="22.5" cy="6.5" r="1.5"></circle>
                                                        <circle cx="12.5" cy="6.5" r="1.5"></circle>
                                                        <circle cx="15.5" cy="10.5" r="1.5"></circle>
                                                        <circle cx="10.5" cy="10.5" r="1.5"></circle>
                                                        <circle cx="20.5" cy="10.5" r="1.5"></circle>
                                                        <circle cx="25.5" cy="10.5" r="1.5"></circle>
                                                        <circle cx="17.5" cy="14.5" r="1.5"></circle>
                                                        <circle cx="22.5" cy="14.5" r="1.5"></circle>
                                                        <circle cx="12.5" cy="14.5" r="1.5"></circle>
                                                    </g>
                                                    <path fill="#66757F" d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"></path>
                                                    <path fill="#66757F" d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Podcasts
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
                                                <g transform="translate(4 4)">
                                                    <path fill="#31373D" d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"></path>
                                                    <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
                                                    <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
                                                    <path fill="#8899A6" d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Videos
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
                                                <g className="h-[24px] w-[24px] align-middle">
                                                    <path fill="#FFD983" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"></path>
                                                    <path fill="#D99E82" d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"></path>
                                                    <path fill="#C1694F" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Tags
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
                                                <g className="h-[24px] w-[24px] align-middle">
                                                    <path fill="#FFD983" d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"></path>
                                                    <path fill="#CCD6DD" d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"></path>
                                                    <path fill="#FFCC4D" d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"></path>
                                                    <path fill="#99AAB5" d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"></path>
                                                    <path fill="#CCD6DD" d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        DEV Help
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 36 36"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <path
                                                    fill="#F4900C"
                                                    d="M11 0C6.582 0 3 3.582 3 8v8h2V8c0-3.313 2.687-6 6-6 3.314 0 6 2.687 6 6v8h2V8c0-4.418-3.582-8-8-8z"
                                                />
                                                <path
                                                    fill="#DD2E44"
                                                    d="M1 8l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H1z"
                                                />
                                                <path
                                                    fill="#FFCC4D"
                                                    d="M25 5c-4.418 0-8 3.582-8 8v8h2v-8c0-3.314 2.688-6 6-6 3.315 0 6 2.686 6 6v8h2v-8c0-4.418-3.582-8-8-8z"
                                                />
                                                <path
                                                    fill="#744EAA"
                                                    d="M15 13l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H15z"
                                                />
                                            </svg>
                                        </span>
                                        Forem Shop
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
                                                <path fill="#DD2E44" d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"></path>
                                            </svg>
                                        </span>
                                        Advertise on DEV
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 36 36"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <path
                                                    fill="#FFAC33"
                                                    d="M5.123 5h6C12.227 5 13 4.896 13 6V4c0-1.104-.773-2-1.877-2h-8c-2 0-3.583 2.125-3 5 0 0 1.791 9.375 1.917 9.958C2.373 18.5 4.164 20 6.081 20h6.958c1.105 0-.039-1.896-.039-3v-2c0 1.104-.773 2-1.877 2h-4c-1.104 0-1.833-1.042-2-2S3.539 7.667 3.539 7.667C3.206 5.75 4.018 5 5.123 5zm25.812 0h-6C23.831 5 22 4.896 22 6V4c0-1.104 1.831-2 2.935-2h8c2 0 3.584 2.125 3 5 0 0-1.633 9.419-1.771 10-.354 1.5-2.042 3-4 3h-7.146C21.914 20 22 18.104 22 17v-2c0 1.104 1.831 2 2.935 2h4c1.104 0 1.834-1.042 2-2s1.584-7.333 1.584-7.333C32.851 5.75 32.04 5 30.935 5zM20.832 22c0-6.958-2.709 0-2.709 0s-3-6.958-3 0-3.291 10-3.291 10h12.292c-.001 0-3.292-3.042-3.292-10z"
                                                />
                                                <path
                                                    fill="#FFCC4D"
                                                    d="M29.123 6.577c0 6.775-6.77 18.192-11 18.192-4.231 0-11-11.417-11-18.192 0-5.195 1-6.319 3-6.319 1.374 0 6.025-.027 8-.027l7-.001c2.917-.001 4 .684 4 6.347z"
                                                />
                                                <path
                                                    fill="#C1694F"
                                                    d="M27 33c0 1.104.227 2-.877 2h-16C9.018 35 9 34.104 9 33v-1c0-1.104 1.164-2 2.206-2h13.917c1.042 0 1.877.896 1.877 2v1z"
                                                />
                                                <path
                                                    fill="#C1694F"
                                                    d="M29 34.625c0 .76.165 1.375-1.252 1.375H8.498C7.206 36 7 35.385 7 34.625v-.25C7 33.615 7.738 33 8.498 33h19.25c.759 0 1.252.615 1.252 1.375v.25z"
                                                />
                                            </svg>
                                        </span>
                                        DEV Challenges
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 36 36"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <path
                                                    fill="#FFAC33"
                                                    d="M34.347 16.893l-8.899-3.294-3.323-10.891c-.128-.42-.517-.708-.956-.708-.439 0-.828.288-.956.708l-3.322 10.891-8.9 3.294c-.393.146-.653.519-.653.938 0 .418.26.793.653.938l8.895 3.293 3.324 11.223c.126.424.516.715.959.715.442 0 .833-.291.959-.716l3.324-11.223 8.896-3.293c.391-.144.652-.518.652-.937 0-.418-.261-.792-.653-.938z"
                                                />
                                                <path
                                                    fill="#FFCC4D"
                                                    d="M14.347 27.894l-2.314-.856-.9-3.3c-.118-.436-.513-.738-.964-.738-.451 0-.846.302-.965.737l-.9 3.3-2.313.856c-.393.145-.653.52-.653.938 0 .418.26.793.653.938l2.301.853.907 3.622c.112.444.511.756.97.756.459 0 .858-.312.97-.757l.907-3.622 2.301-.853c.393-.144.653-.519.653-.937 0-.418-.26-.793-.653-.937zM10.009 6.231l-2.364-.875-.876-2.365c-.145-.393-.519-.653-.938-.653-.418 0-.792.26-.938.653l-.875 2.365-2.365.875c-.393.146-.653.52-.653.938 0 .418.26.793.653.938l2.365.875.875 2.365c.146.393.52.653.938.653.418 0 .792-.26.938-.653l.875-2.365 2.365-.875c.393-.146.653-.52.653-.938 0-.418-.26-.792-.653-.938z"
                                                />
                                            </svg>
                                        </span>
                                        DEV Showcase
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
                                            <svg
                                                id="Layer_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 864 864"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <defs>
                                                    <clipPath id="clippath">
                                                        <rect width="864" height="864" />
                                                    </clipPath>
                                                </defs>

                                                <g clipPath="url(#clippath)">
                                                    <rect x="-3.85" y="-28.35" width="871.71" height="920.7" />
                                                    <rect className="fill-white" x="105.43" y="211.09" width="651.13" height="491.58" />
                                                    <g>
                                                        <path
                                                            className="fill-black"
                                                            d="M811.52-35.36c-263.17-.01-526.35-.01-789.52,0-32.21,0-60.2,18.9-71.43,48.82-2.14,5.7-3.17,12.16-3.17,18.28-.15,266.9-.13,533.8-.13,800.69,0,30.23,17.2,55.53,45.61,66.98,4.86,1.96,9.8,3.71,14.7,5.56H825.55c10.35-4.91,21.61-8.52,30.85-15,20.83-14.61,31.31-35.48,31.32-61.1,.06-262.5,.05-525,.06-787.51,0-42.82-33.65-76.71-76.26-76.72ZM306.58,506.45c-.79,36.65-35.76,70.78-73.17,72.19-31.04,1.17-62.16,.25-93.25,.21-.87,0-1.74-.47-3.09-.85V282.12c1.75-.3,3.52-.85,5.3-.86,30.14-.05,60.3-.55,90.43,.12,36.94,.82,73.06,35.65,73.8,72.61,1.03,50.8,1.07,101.66-.03,152.46Zm182.9,72.08c-2.86,.14-5.86,.4-8.87,.4-34.55,.03-69.1,.04-103.64,0-19.44-.02-33.95-13.13-35.82-32.43-.51-5.3-.68-10.64-.68-15.97-.04-68.77,.01-137.54-.07-206.31-.01-12.95,1.52-25.52,12.5-33.89,5.49-4.18,12.61-8.57,19.08-8.7,38.9-.8,77.82-.4,117.41-.4v53.47c-22.23,0-44.13-.08-66.03,.04-9.05,.05-21.91-2.92-26.14,1.74-4.84,5.33-2.29,17.62-2.47,26.9-.25,12.78-.06,25.57-.06,39.77h57.77v53.98h-57.09v67.83h94.12v53.57Zm243.21-247.2c-18.03,67.91-35.68,135.93-54.59,203.6-3.31,11.86-10.43,23.59-18.57,32.97-13.96,16.09-37.39,16.28-51.56,.38-8.27-9.27-15.65-20.96-18.91-32.8-22.82-82.77-44.46-165.86-66.44-248.87-.39-1.46-.25-3.07-.42-5.38,18.47,0,36.65-.21,54.81,.31,1.95,.06,4.81,4.07,5.51,6.71,15.81,59.77,31.36,119.62,46.99,179.44,1.06,4.06,2.3,8.08,5.06,11.86,17.18-66.02,34.35-132.03,51.54-198.07h59.54c-4.4,16.96-8.58,33.43-12.94,49.86Z"
                                                        />
                                                        <path
                                                            className="fill-black"
                                                            d="M190.38,525.05v-189.03c13.36,0,26.62-1.48,39.39,.39,14.83,2.16,23.31,13.98,23.47,30.76,.41,42.02,.5,84.05-.04,126.07-.25,19.16-10.84,29.89-30.15,31.65-10.51,.96-21.18,.17-32.67,.17Z"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        About
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 44 44"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <g className="nc-icon-wrapper">
                                                    <path
                                                        fill="#FFAC33"
                                                        d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                                                    />
                                                    <path
                                                        fill="#BE1931"
                                                        d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                                                    />
                                                    <path
                                                        fill="#BE1931"
                                                        d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                        Contact
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 47.5 47.5"
                                                className="w-[24px] h-[24px]"
                                            >
                                                <defs>
                                                    <clipPath id="clipPath18">
                                                        <path d="M 0,38 38,38 38,0 0,0 0,38 z" />
                                                    </clipPath>
                                                </defs>
                                                <g transform="matrix(1.25,0,0,-1.25,0,47.5)">
                                                    <g clipPath="url(#clipPath18)">
                                                        <g transform="translate(33,30)">
                                                            <path
                                                                d="m 0,0 -28,0 c -2.209,0 -4,-1.791 -4,-4 l 0,-15 c 0,-2.209 1.791,-4 4,-4 l 11.416,0 c 0.52,-0.596 1.477,-1 2.584,-1 1.107,0 2.064,0.404 2.584,1 L 0,-23 c 2.209,0 4,1.791 4,4 L 4,-4 C 4,-1.791 2.209,0 0,0"
                                                                fill="#226699"
                                                            />
                                                        </g>
                                                        <g transform="translate(21,10)">
                                                            <path
                                                                d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                                                fill="#292f33"
                                                            />
                                                        </g>
                                                        <g transform="translate(19,11)">
                                                            <path
                                                                d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                                                fill="#99aab5"
                                                            />
                                                        </g>
                                                        <g transform="translate(19,11)">
                                                            <path
                                                                d="m 0,0 c -0.999,1.998 -3.657,2 -4,2 -2,0 -5,-2 -8,-2 -1,0 -2,0.896 -2,2 l 0,16 c 0,1.104 1,2 2,2 3.255,0 6,2 8,2 3,0 4,-1.896 4,-3 L 0,0 z"
                                                                fill="#e1e8ed"
                                                            />
                                                        </g>
                                                        <g transform="translate(35,11)">
                                                            <path
                                                                d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                                                fill="#99aab5"
                                                            />
                                                        </g>
                                                        <g transform="translate(19,11)">
                                                            <path
                                                                d="m 0,0 c 0.999,1.998 3.657,2 4,2 2,0 5,-2 8,-2 1,0 2,0.896 2,2 l 0,16 c 0,1.104 -1,2 -2,2 C 8.744,20 6,22 4,22 1,22 0,20.104 0,19 L 0,0 z"
                                                                fill="#ccd6dd"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        Guides
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 45 45"
                                                className="w-[24px] h-[24px]" // Tailwind example: You can modify size and other styles here
                                                fill="none"
                                            >
                                                <g transform="matrix(1.25,0,0,-1.25,0,45)">
                                                    <g>
                                                        <g>
                                                            <g transform="translate(2,20)">
                                                                <path
                                                                    d="M 0,0 c 0,-8.837 7.164,-16 16,-16 8.837,0 16,7.163 16,16 C 32,8.836 24.837,16 16,16 7.164,16 0,8.836 0,0"
                                                                    fill="#ffcc4d"
                                                                />
                                                            </g>
                                                            <g transform="translate(15.4063,25.5)">
                                                                <path
                                                                    d="M 0,0 c 0,-1.381 -0.896,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.104,0 2,-1.12 2,-2.5"
                                                                    fill="#664500"
                                                                />
                                                            </g>
                                                            <g transform="translate(26,24.5)">
                                                                <path
                                                                    d="M 0,0 c 0,-1.381 -0.895,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.105,0 2,-1.12 2,-2.5"
                                                                    fill="#664500"
                                                                />
                                                            </g>
                                                            <g transform="translate(9.6709,29.667)">
                                                                <path
                                                                    d="M 0,0 C -0.164,0.087 -0.303,0.223 -0.391,0.398 -0.607,0.827 -0.431,1.325 0.002,1.511 4.268,3.341 7.701,1.554 7.845,1.477 8.278,1.246 8.453,0.729 8.236,0.323 8.02,-0.082 7.496,-0.223 7.063,0.005 6.94,0.069 4.231,1.437 0.785,-0.042 0.528,-0.151 0.238,-0.127 0,0"
                                                                    fill="#664500"
                                                                />
                                                            </g>
                                                            <g transform="translate(14.7427,16.4277)">
                                                                <path
                                                                    d="M 0,0 C -0.136,0.127 -0.236,0.293 -0.276,0.486 -0.375,0.955 -0.078,1.392 0.389,1.46 4.981,2.138 7.841,-0.469 7.962,-0.58 8.322,-0.914 8.357,-1.457 8.044,-1.795 7.732,-2.131 7.189,-2.133 6.83,-1.801 6.726,-1.709 4.458,0.307 0.748,-0.24 0.471,-0.281 0.197,-0.184 0,0"
                                                                    fill="#664500"
                                                                />
                                                            </g>
                                                            <g transform="translate(20.4307,25.917)">
                                                                <path
                                                                    d="M 0,0 C -0.156,0.098 -0.286,0.243 -0.362,0.424 -0.549,0.866 -0.339,1.352 0.105,1.508 4.486,3.044 7.79,1.028 7.929,0.941 8.344,0.681 8.483,0.154 8.24,-0.237 7.998,-0.627 7.464,-0.732 7.049,-0.475 6.929,-0.402 4.321,1.146 0.782,-0.095 0.518,-0.187 0.23,-0.143 0,0"
                                                                    fill="#664500"
                                                                />
                                                            </g>
                                                            <g transform="translate(17.2764,0.8682)">
                                                                <path
                                                                    d="M 0,0 c 0,0 1.265,0.411 1.429,1.352 0.173,0.971 -0.624,1.167 -0.624,1.167 0,0 1.041,0.208 1.172,1.376 0.123,1.1 -0.862,1.363 -0.862,1.363 0,0 0.97,0.4 1.016,1.539 0.038,0.959 -0.995,1.428 -0.995,1.428 0,0 5.038,1.22 5.555,1.34 0.516,0.121 1.321,0.616 1.07,1.695 -0.249,1.08 -1.204,1.118 -1.698,1.003 -0.494,-0.116 -6.744,-1.567 -8.9,-2.069 -0.23,-0.053 -1.308,-0.302 -1.439,-0.334 -0.54,-0.127 -0.785,0.111 -0.405,0.512 0.509,0.536 0.833,1.129 0.947,2.113 0.119,1.036 -0.232,2.314 -0.433,2.809 -0.374,0.921 -1.005,1.649 -1.734,1.899 -1.138,0.39 -1.946,-0.321 -1.542,-1.561 0.604,-1.855 0.209,-3.375 -0.833,-4.293 -2.449,-2.157 -3.589,-3.695 -2.83,-6.973 0.827,-3.575 4.377,-5.876 7.952,-5.048 C -2.965,-0.64 0,0 0,0"
                                                                    fill="#f4900c"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        Software comparisons
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav className="mb-4 block">
                            <h2
                                className="pl-3 py-2 text-[1rem] leading-[1.5] font-[700] text-[#242424] "
                            >
                                Other
                            </h2>
                            <ul className="m-0 p-0">
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
                                                <g transform="translate(4 4)">
                                                    <circle fill="#FFCC4D" cx="18" cy="18" r="18"></circle>
                                                    <path fill="#664500" d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"></path>
                                                    <path fill="#65471B" d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"></path>
                                                    <path fill="#FFF" d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"></path>
                                                    <path fill="#65471B" d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"></path>
                                                    <path fill="#292F33" d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        Privacy Policy
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
                                                <g transform="translate(4 4)">
                                                    <ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"></ellipse>
                                                    <path fill="#E1E8ED" d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"></path>
                                                    <circle fill="#8899A6" cx="6.594" cy="18" r="4.96"></circle>
                                                    <circle fill="#292F33" cx="6.594" cy="18" r="3.565"></circle>
                                                    <circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"></circle>
                                                    <ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"></ellipse>
                                                    <path fill="#E1E8ED" d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"></path>
                                                    <circle fill="#8899A6" cx="25" cy="18" r="4.96"></circle>
                                                    <circle fill="#292F33" cx="25" cy="18" r="3.565"></circle>
                                                    <circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"></circle>
                                                </g>
                                            </svg>
                                        </span>
                                        Terms of use
                                    </Link>
                                </li>
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
                                <FaYoutube className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};