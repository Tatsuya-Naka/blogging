"use client";
import Link from "next/link";
// import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import DialogBox from "./Dialog";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';


type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType
};

export default function PostMain({ userData }: Props) {
    // const userData = await getServerAuthuserData();
    // const { data: userDataData, status } = useuserData();
    const pathname = usePathname();
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(true);
    const [isDelete, setIsDelete] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleClickEdit = (e: React.MouseEvent<HTMLDivElement>) => {
        // Custom behavior on click
        setIsEdit(true);
        console.log("Click Edit");
    };
    const handleClickReview = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsEdit(false);
        console.log("Click Review");
    };

    const handleDialogOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
        router.push("/home");
    };

    return (
        <div className="w-full bg-gray-100">
            <div className="flex justify-between items-center px-5 py-6">
                <div className="flex gap-3 items-center">
                    <Link
                        href="/home"
                        className="..."
                    >
                        <FaHome />
                    </Link>
                    <p className="font-bold font-lg">Create Post</p>
                </div>
                <div className="flex items-center">
                    <div className="..." onClick={handleClickEdit}>
                        <Link
                            href={userData ? `/home/create-post/${userData.id}` : "/home"}
                            className={`rounded-md px-3 py-2 text-sm font-medium ${isEdit ? "font-bold text-black-500" : "text-gray-300"
                                } hover:text-blue-500 hover:bg-gray-200`}
                        // className="rounded-md px-3 py-2 text-sm font-medium text-black-300 font-bold hover:text-blue hover:bg-white-500"
                        >
                            Edit
                        </Link>
                    </div>
                    <div className="..." onClick={handleClickReview}>
                        <Link
                            href={userData ? `/home/create-post/${userData.id}` : "/home"}
                            className={`rounded-md px-3 py-2 text-sm font-medium ${isEdit ? "text-gray-300" : "font-bold text-black-500"
                                } hover:text-blue-500 hover:bg-gray-200`}
                        >
                            Review
                        </Link>
                    </div>
                </div>
                <div className="flex items-center" onClick={handleDialogOpen}>
                    <div className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400 cursor-pointer">
                        <FaRegTimesCircle />
                    </div>
                    {/* <Link
                        href={isDelete ? "/home" : (userData ? `/home/create-post/${userData.id}` : "/home")}
                        className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400"
                    >

                    </Link> */}
                </div>
                {isDialogOpen &&
                    <Dialog
                        open={isDialogOpen}
                        className="relative z-10"
                        onClose={() => setIsDialogOpen(false)}
                    >
                        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-30" />
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <DialogPanel className="bg-white rounded-lg p-6 shadow-xl">
                                <DialogTitle className="flex items-center space-x-2">
                                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    <span>You have unsaved changes</span>
                                </DialogTitle>
                                <p className="mt-2">You've made changes to your post. Do you want to leave this page?</p>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button
                                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                                        onClick={handleDialogClose}
                                    >
                                        Yes, leave the page
                                    </button>
                                    <button
                                        className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300"
                                        onClick={() => setIsDialogOpen(false)}
                                    >
                                        No, keep editing
                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                }
            </div>
        </div>
    );
};
