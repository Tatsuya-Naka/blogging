import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { FcHome } from "react-icons/fc";
import { FcTabletAndroid } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

export default async function LeftSide() {
    const session = await getServerAuthSession();

    return (
        <div className="py-3">
            {!session &&
                <div className="shadow-md bg-white rounded-lg">
                    <div className="px-4 py-3">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-gray-700 font-bold">
                                DEV Community is a community of 2,002,061 amazing developers
                            </h1>
                            <p className="text-gray-700">
                                We are a place where coders share, stay up-to-date and grow their careers.
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <Link
                                    href={session ? "/api/auth/signout" : "/api/auth/signin"}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-blue-700 hover:text-white"
                                >
                                    {session ? "Logout " : "Login"}
                                </Link>
                                <Link
                                    href={session ? "/api/auth/signout" : "/api/auth/signin"}
                                    // className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {session ? "Sign out" : "Sign in"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="flex flex-col gap-4 py-4 w-full">
                {/* Side-bar link */}
                <div className="flex gap-2 items-center text-lg w-full">
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-black-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        <div className="flex gap-2 items-center text-lg">
                            <FcHome />
                            Home
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-4 py-4 w-full">
                {/* Side-bar link */}
                <div className="flex gap-2 items-center text-lg w-full">
                    <h3 className="font-bold">Others</h3>
                </div>
                <div className="flex gap-2 items-center text-lg w-full">
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-black-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        <div className="flex gap-2 items-center text-lg">
                            <FcTabletAndroid />
                            Code of Conduct
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex items-center text-lg py-4">
                <a
                    href="https://x.com/i/flow/login"
                    className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                ><FaXTwitter /></a>
                <a
                    href="https://www.instagram.com/"
                    className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                ><FaInstagram /></a>
                <a
                    href="https://www.facebook.com/"
                    className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                ><AiOutlineFacebook /></a>
                <a
                    href="https://github.com/"
                    className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                ><FaGithub /></a>
                <a
                    href="https://www.twitch.tv/thepracticaldev"
                    className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                ><FaTwitch /></a>
            </div>

            <div className="flex flex-col gap-2 py-4 w-full">
                {/* Side-bar link */}
                <div className="flex gap-2 items-center text-lg w-full">
                    <h3 className="font-bold">Popular Tags</h3>
                </div>
                <div className="flex gap-2 items-center text-lg w-full">
                    {/* I would like to create a scroll container here */}
                </div>
                <div className="h-60 overflow-y-auto flex flex-col gap-2">
                    {/* Scrollable content here */}
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    <Link
                        href="/home"
                        className="rounded-md px-3 py-2 w-full text-sm font-medium text-gray-500 hover:text-blue-500 hover:bg-gray-200"
                    >
                        # Conduct
                    </Link>
                    {/* Add more tags as needed */}
                </div>
            </div>

            <div className="flex flex-col gap-4 text-sm py-4">
                <p className="text-gray-400">DEV Community A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                <p className="text-gray-400">DEV Community A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                <p className="text-gray-400">DEV Community A constructive and inclusive social network for software developers. With you every step of your journey.</p>
            </div>
        </div>
    );
};