import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export default async function RightSide() {
    const session = await getServerAuthSession();

    return (
        <div className="flex flex-col gap-10 px-4 py-3">
            <div className="shadow-md bg-white rounded-lg">
                <div className="...">
                    <div className="flex flex-col gap-4">
                        <div className="border-b px-4 py-3">
                            <h3 className="font-bold">Active Discussions</h3>
                        </div>
                        <div className="border-b px-4 py-3 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="hover:text-blue-600 text-black-600"
                            >
                                Switch Branches in Git Without Losing Your Work
                            </Link>
                            <p className="text-sm text-gray-400">7 comments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-md bg-white rounded-lg">
                <div className="...">
                    <div className="flex flex-col gap-4">
                        <div className="border-b px-4 py-3">
                            <h3 className="font-bold">Active Discussions</h3>
                        </div>
                        <div className="border-b px-4 py-3 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="hover:text-blue-600 text-black-600"
                            >
                                Switch Branches in Git Without Losing Your Work
                            </Link>
                            <p className="text-sm text-gray-400">7 comments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-md bg-white rounded-lg">
                <div className="...">
                    <div className="flex flex-col gap-4">
                        <div className="border-b px-4 py-3">
                            <h3 className="font-bold">Active Discussions</h3>
                        </div>
                        <div className="border-b px-4 py-3 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="hover:text-blue-600 text-black-600"
                            >
                                Switch Branches in Git Without Losing Your Work
                            </Link>
                            <p className="text-sm text-gray-400">7 comments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 flex flex-col">
                <div className="flex gap-2 items-center text-lg w-full">
                    <p className="font-bold text-sm">trending guides/resources</p>
                </div>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    10 Things You Can Learn from Netflix’s Architecture
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    10 Things You Can Learn from Netflix’s Architecture
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    10 Things You Can Learn from Netflix’s Architecture
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    10 Things You Can Learn from Netflix’s Architecture
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    10 Things You Can Learn from Netflix’s Architecture
                </Link>
                <hr className="border-gray-300 my-4" />
            </div>

            <div className="py-3 flex flex-col">
                <div className="flex gap-2 items-center text-lg w-full">
                    <p className="font-bold text-sm">recently queried</p>
                </div>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    Python
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    Python
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    Python
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    Python
                </Link>
                <Link
                    href="/"
                    className="px-5 py-3 w-full text-lg font-medium text-gray-500 hover:text-blue-500 hover:bg-white"
                >
                    Python
                </Link>
                <hr className="border-gray-300 my-4" />
            </div>
        </div>
    )
};