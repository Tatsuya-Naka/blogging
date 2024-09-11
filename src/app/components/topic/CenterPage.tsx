'use client';
// import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ImageSample from "../images/simple_b.png";
import Image from "next/image";
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

export default function TopicCenter({ userData }: Props) {
    // const userData = await getServerAuthuserData();
    // const [selectedLink, setSelectedLink] = useState("/home");
    // const selectedLink = "/home";
    const pathname = usePathname();
    const tags: string[] = ["devchallenge", "nylaschallenge", "ai", "api"];
    const imageData = ImageSample;
    const userId = pathname.split('/')[2] ?? '';
    const topicId = pathname.split('/')[3] ?? '';


    useEffect(() => {
        const id = userData?.id;
        if (id === userId) console.log("Wonderful same");
        console.log(pathname);
        console.log("Userid: ", userId);
    }, []);

    const { data: topic, refetch: refetchTopic } = trpc.topic.getTopic.useQuery({
        userId: userId, topicId: topicId
    }
    );

    useEffect(() => {
        console.log(topic);
        console.log(topic?.user.name);
    }, [topic]);

    return (
        <div className="grid gap-4 min-w-0 ">
            <div className="min-w-0 box-border block ">
                {/* Topic Content */}
                <div className="mb-4 rounded-[0.375rem] bg-white text-engineBorderColor p-0 relative ">
                    {/* Title */}
                    <div>
                        {/* BackgroundImage */}
                        <a href="#"
                            className="block rounded-[0.375rem] max-h-[calc(100vh - 56px - 2*1rem)] overflow-hidden "
                        >
                            <Image
                                src={imageData}
                                alt={"Image Data"}
                                width={1000}
                                height={420}
                                className="apect-[1000/420] m-auto block w-full h-auto object-contain"
                            />
                            {/* <img src={imageData}
                                    className="apect-[1000/420] m-auto block w-full h-auto object-contain "
                                /> */}
                            {/* <span className="m-auto block w-full h-auto bg-green"></span> */}
                        </a>
                        <div className="px-[4rem] pt-[2rem] box-border">
                            <div className="sm:items-start sm:flex-row flex ">
                                {userData?.id === userId && <div className="sm:mb-0 order-[9999] bg-topicEdit border-[1px] border-solid border-topicEdit rounded-[0.375rem] p-[0.25rem] ">
                                    <a href="#"
                                        className="px-2 text-[#3d3d3d] text-[0.875] relative inline-block pointer border-0 "
                                    >
                                        Edit
                                    </a>
                                    <a href={`/edit/delete/${userId}/${topicId}`}
                                        className="px-2 text-[#3d3d3d] text-[0.875] relative inline-block pointer border-0 "
                                    >
                                        Manage
                                    </a>
                                    <a href="#"
                                        className="px-2 text-[#3d3d3d] text-[0.875] relative inline-block pointer border-0 "
                                    >
                                        Stats
                                    </a>
                                </div>}
                                <div className="flex mb-5 flex-1 items-start">
                                    {/* Icon */}
                                    <div className="relative ">
                                        <a href="#"
                                            className=""
                                        >
                                            {/* <img className="rounded-full" src="https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2023473%2F6e1b385a-4152-4773-a392-598d4981575d.png" width="40" height="40" alt="なかごみ龍也"></img> */}
                                            <Image
                                                src={topic?.user.image ?? ""}
                                                alt={topic?.user.name ?? ""}
                                                height={40}
                                                width={40}
                                                className="rounded-full"
                                            />
                                        </a>
                                    </div>

                                    <div className="pl-3 flex-1 flex flex-col">
                                        <a href="#"
                                            className="font-[500]">
                                            {topic ? topic.user.name : ""}
                                        </a>
                                        <p className="text-[0.75rem] text-[#717171] ">
                                            Posted on Sep 1
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="lg:text-[3rem] md:text-[2.25rem] sm:font-800] font-[700] leading-[1.25] text-[1.875rem] mb-2 ">
                                {topic && topic.title}
                            </h1>

                            {/* Tags */}
                            <div className="flex flex-wrap ">
                                <a href="#"
                                    className="bg-transparent rounded-[0.375rem] inline-flex items-center px-[0.5rem] py-[0.25rem] "
                                >

                                </a>
                            </div>
                        </div>
                    </div>

                    {/* content */}
                    <div className="py-[2rem] px-[4rem] ">
                        <div className="text-[1.25rem] ">
                            <p>
                                {topic && topic.description}
                            </p>
                            {/* <p className="mb-[1.25rem] ">
                                When working with Tailwind CSS, you're already familiar with its utility-first approach, making styling your applications incredibly efficient. However, sometimes you need features that go beyond the core utility set. One such feature is text shadows, which aren’t natively provided by Tailwind. But don't worry—using a third-party plugin, you can extend Tailwind CSS to include customizable text shadows!
                            </p>
                            <p className="mb-[1.25rem] ">
                                When working with Tailwind CSS, you're already familiar with its utility-first approach, making styling your applications incredibly efficient. However, sometimes you need features that go beyond the core utility set. One such feature is text shadows, which aren’t natively provided by Tailwind. But don't worry—using a third-party plugin, you can extend Tailwind CSS to include customizable text shadows!
                            </p>
                            <p className="mb-[1.25rem] ">
                                When working with Tailwind CSS, you're already familiar with its utility-first approach, making styling your applications incredibly efficient. However, sometimes you need features that go beyond the core utility set. One such feature is text shadows, which aren’t natively provided by Tailwind. But don't worry—using a third-party plugin, you can extend Tailwind CSS to include customizable text shadows!
                            </p> */}
                        </div>

                        <div>

                        </div>
                    </div>

                    {/* Comment */}
                    <div className="mb-4 border-t-1 border-0 border-solid border-[#efefef] py-[2rem] px-[4rem] ">
                        <div className="relative flex mb-6 justify-between items-center ">
                            <div className="flex items-center ">
                                <h2 className="sm:text-[1.5rem] text-[1.25rem] sm:leading-[1.5] font-[700] text-[#242424] leading-[1.25] ">
                                    Top comments <span>(0)</span>
                                </h2>

                                <button className="relative inline-block rounded-[0.375rem] py-[0.5rem] px-[1rem] text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="mt-2"><title>Crown</title>
                                        <path d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="">
                                <div className="static ">
                                    <div className="flex ">
                                        {userData ?
                                            <>
                                                <button className="rounded-l-[0.375rem] border-[#d6d6d7] border-[2px] py-[0.5rem] px-[1rem] text-[1rem] relative inline-block leading-[1.5rem] font-[500] text-center border-solid">
                                                    Unsubscribed
                                                </button>
                                                <button className="rounded-r-[0.375rem] border-[#d6d6d7] border-[2px] py-[0.5rem] px-[1rem] text-[1rem] relative inline-block leading-[1.5rem] font-[500] text-center border-solid">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ai2ols8ka2ohfp0z568lj68ic2du21s" className="..."><title id="ai2ols8ka2ohfp0z568lj68ic2du21s">Preferences</title><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                                                </button>
                                            </>
                                            :
                                            <button
                                                // onClick={(href)}
                                                className="rounded-l-[0.375rem] border-[#d6d6d7] border-[2px] py-[0.5rem] px-[1rem] text-[1rem] relative inline-block leading-[1.5rem] font-[500] text-center border-solid"
                                            >
                                                Subscribe
                                            </button>
                                        }

                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-border">
                            <form
                                className="flex mb-[1rem] "
                            >
                                <span className="mr-2 shrink-0 md:w-[2rem] md:h-[2rem] inline-block rounded-full relative overflow-hidden align-middle ">
                                    {/* <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2023473%2F6e1b385a-4152-4773-a392-598d4981575d.png" width="32" height="32" alt="pic" className=" overflow-hidden" id="comment-primary-user-profile--avatar" loading="lazy" /> */}
                                    {userData ? <Image
                                        src={userData?.image ?? ""}
                                        alt={userData?.name ?? ""}
                                        width={32}
                                        height={32}
                                    /> :
                                        <span className="mr-2 shrink-0 inline-block rounded-full relative bg-emerald-400 w-[32px] h-[32px] overflow-hidden align-middle ">
                                            <img src="" className="" />
                                        </span>
                                    }
                                </span>

                                <div className="flex flex-col flex-1 min-w-0 ">
                                    <div className="flex flex-1 flex-col mb-[0.75rem] bg-white border-[1px] border-solid border-borderColor  rounded-[0.375rem] ">
                                        <textarea
                                            className="resize-none outline-none  max-h-[40vh] w-full leading-[1.5] text-[1rem] border-[1.5px] rounded-[0.375rem] "
                                            placeholder="Add to the discussion"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="text-center ">
                            <nav className="block text-center text-[0.875rem] ">
                                <a href="#"
                                    className="text-[#717171]"
                                >
                                    Code of Conduct
                                </a>
                                <span className="px-2 opacity-25 ">
                                    ・
                                </span>
                                <a href="#"
                                    className="text-[#717171]"
                                >
                                    Report abuse
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Comment from anyone */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};