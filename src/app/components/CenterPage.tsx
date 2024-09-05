'use client';
// import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Notif from "./center/Notif";
import simpleImage from "./images/simple.png";
import simpleImage_a from "./images/simple_a.png";
import Pages from "./center/Pages";
import { useEffect } from "react";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType
};

export default function CenterPage({ userData }: Props) {
    // const userData = await getServerAuthuserData();
    // const [selectedLink, setSelectedLink] = useState("/home");
    // const selectedLink = "/home";
    const pathname = usePathname();
    const tags: string[] = ["devchallenge", "nylaschallenge", "ai", "api"];

    useEffect(() => {
        console.log(userData);
    }, [])
    return (
        <div className="flex flex-col px-4 py-3">
            <div className="py-4">
                <Link
                    href="/home"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/home" || pathname === "/" ? "font-bold text-black-500" : "text-gray-300"
                        } hover:text-blue-500 hover:bg-gray-200`}
                // className="rounded-md px-3 py-2 text-sm font-medium text-black-300 font-bold hover:text-blue hover:bg-white-500"
                >
                    Relevant
                </Link>
                <Link
                    href="/latest"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/latest" ? "font-bold text-black-500" : "text-gray-300"
                        } hover:text-blue-500 hover:bg-gray-200`}
                >
                    Latest
                </Link>
                <Link
                    href="/top"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === "/top" ? "font-bold text-black-500" : "text-gray-300"
                        } hover:text-blue-500 hover:bg-gray-200`}
                >
                    Top
                </Link>
            </div>

            <div className="flex flex-col gap-4">
                <Notif
                    category={"Dev Challenge"}
                    title={"Heads up about a new thing"}
                    subtitle={"Look no further"}
                    image={simpleImage}
                    link={"https://dev.to/"}
                    description={"You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date."}
                    comment={"Happy coding"}
                    userData={userData}
                />
                <Notif
                    category={"Dev Challenge"}
                    title={"Heads up about a new thing"}
                    subtitle={"Look no further"}
                    image={simpleImage_a}
                    link={"https://dev.to/"}
                    description={"You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date."}
                    comment={"Happy coding"}
                    userData={userData}
                />
                <Pages
                    image={userData?.image || ""}
                    user={userData?.name || "Admin"}
                    team={userData?.name || "Admnin"}
                    date={"Sep 5"}
                    title={"Congrats to the Nylas Challenge Winners!"}
                    tags={tags}
                    reactions={5}
                    comments={3}
                    record={4}
                />
            </div>

        </div>
    );
};