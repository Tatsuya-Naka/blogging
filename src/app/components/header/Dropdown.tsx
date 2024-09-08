import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType
};

export default function Dropdown({ userData }: Props) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex">
                    {/* Options */}
                    <Image
                        src={userData?.image ?? ""}
                        alt={userData?.name ?? "User"}
                        width={40}
                        height={40}
                        style={{ borderRadius: '50%' }}
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-2 px-2">
                    <MenuItem>
                        <div className="px-1 py-1">
                            <a
                                href="#"
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="font-bold text-gray-800">{userData?.name}</p>
                                    <p className="overflow-hidden text-ellipsis">{userData?.id}</p>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                </div>
                <div className="py-2 px-2">
                    <MenuItem>
                        <div className="px-1 py-1">
                            <a
                                href="#"
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="overflow-hidden text-ellipsis">Dashboard</p>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="px-1 py-1">
                            <Link
                                href={userData ? `/home/create-post/${userData.id}` : `/home`}
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="overflow-hidden text-ellipsis">Create Post</p>
                                </div>
                            </Link>
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="px-1 py-1">
                            <a
                                href="#"
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="overflow-hidden text-ellipsis">Reading List</p>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="px-1 py-1">
                            <a
                                href="#"
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="overflow-hidden text-ellipsis">Setting</p>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                </div>
                <div className="py-2 px-2">
                <MenuItem>
                        <div className="px-1 py-1">
                            <a
                                href="/api/auth/signout"
                                className="rounded-md block flexpx-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-100 hover:underline decoration-2 text-base"
                            >
                                <div className="flex flex-col px-1 py-1">
                                    <p className="overflow-hidden text-ellipsis">Logout</p>
                                </div>
                            </a>
                        </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
};