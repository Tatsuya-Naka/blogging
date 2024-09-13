'use client';
// import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Notif from "./center/Notif";
import simpleImage from "./images/simple.png";
import simpleImage_a from "./images/simple_a.png";
import Pages from "./center/Pages";
import { useEffect } from "react";
import Ad from "./center/Ad";
import PageWithPic from "./center/PageWithPic";
import SampleImage from "./images/simple_b.png";
import { trpc } from "~/server/utils/trpc";

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
    const pathname = usePathname();
    // const tags: string[] = ["devchallenge", "nylaschallenge", "ai", "api"];
    const { data: topics, refetch: refetchTopics } = trpc.topic.getTopicsAll.useQuery();

    useEffect(() => {
        console.log(userData);
    }, []);

    useEffect(() => {
        console.log("Topics: ", topics);
        // console.log("FIrst: ", topics["firstTopic"]);
    }, [topics]);
    const firstTopic = topics?.firstTopic;
    const restOfTopics = topics?.restOfTopic;

    useEffect(() => {
        console.log("First: ", firstTopic);
        console.log("Rest: ", restOfTopics);
    }, [firstTopic, restOfTopics]);

    return (
        <div className="flex flex-col">
            <div className="md:px-0 md:p-0 md:mb-2 px-3 p-2 text-[1.125rem] ">
                <nav className="md:mx-0 sm:flex justify-between items-center ">
                    <ul className="flex items-center py-[0.25rem] my-[calc(-1 * 0.25rem)]">
                        <li className="...">
                            <Link
                                href="/"
                                className={`inline-flex py-[0.5rem] px-[0.75rem] rounded-[0.375rem] hover:text-createBorderHover hover:bg-white ${pathname === "/" || pathname === "/home" ? "text-[#090909] font-[700]" : "text-[#575757]"} relative`}
                            >
                                Relevant
                            </Link>
                        </li>
                        <li className="...">
                            <Link
                                href="#"
                                className={`inline-flex py-[0.5rem] px-[0.75rem] rounded-[0.375rem] ${pathname === "/latest" ? "text-[#090909] font-[700]" : "text-[#575757]"} relative hover:text-createBorderHover hover:bg-white`}
                            >
                                Latest
                            </Link>
                        </li>
                        <li className="...">
                            <Link
                                href="#"
                                className={`inline-flex py-[0.5rem] px-[0.75rem] rounded-[0.375rem] ${pathname === "/top" ? "text-[#090909] font-[700]" : "text-[#575757]"} relative hover:text-createBorderHover hover:bg-white`}
                            >
                                Top
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="...">
                {!userData &&
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
                }
                {firstTopic &&
                    <PageWithPic
                        userData={userData}
                        userId={firstTopic?.user.id ?? ""}
                        image={firstTopic?.user.image ?? ""}
                        user={firstTopic?.user.name ?? "Admin"}
                        team={firstTopic?.user.name ?? "Admnin"}
                        date={"Sep 1"}
                        title={firstTopic?.title ?? ""}
                        tags={[]}
                        reactions={5}
                        comments={3}
                        record={4}
                        url={`/topic/${firstTopic?.user.id}/${firstTopic?.id}`}
                        headImage={SampleImage}
                        bio={"Thank you"}
                    />
                }
                <Ad
                    category={"Dev Challenge"}
                    title={"Heads up about a new thing"}
                    subtitle={"Look no further"}
                    image={simpleImage_a}
                    link={"https://dev.to/"}
                    description={"You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date."}
                    comment={"Happy coding"}
                    userData={userData}
                />
                {restOfTopics?.map((restOfTopic) => {
                    return (
                        <Pages
                            userData={userData}
                            key={restOfTopic?.id}
                            userId={restOfTopic.user.id}
                            image={restOfTopic.user.image ?? ""}
                            user={restOfTopic.user.name ?? ""}
                            team={restOfTopic.user.name ?? ""}
                            date={"Sep 1"}
                            title={restOfTopic.title ?? ""}
                            tags={[]}
                            reactions={5}
                            comments={3}
                            record={4}
                            url={`/topic/${restOfTopic?.user.id}/${restOfTopic?.id}`}
                            bio={"Thank you"}
                        />
                    )
                })}
            </div>

        </div>
    );
};