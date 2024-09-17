'use client';
import { trpc } from "~/server/utils/trpc";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType
};

export default function TopicRight({ userData }: Props) {
    const pathname = usePathname();

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
    }, [topic]);

    const router = useRouter();

    const handleRoute = () => {
        router.push("/setting/profile");
    };

    return (
        <div className="block md:w-[3fr] w-[5fr]">
            <section className="grid pb-4 gap-4">
                <div className="grid pt-0 p-4 gap-4 bg-white md:rounded-[0.375rem] border-t-[2rem] border-t-solid border-t-createAccountBG">
                    <div className="-mt-4 ">
                        <a href={`/user/${userId}`}
                            className="flex "
                        >
                            <span className="mr-2 shrink-0 w-[3rem] h-[3rem] inline-block rounded-full relative bg-leftBoxText overflow-hidden align-middle ">
                                {/* <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2023473%2F6e1b385a-4152-4773-a392-598d4981575d.png" className="rounded-full w-full h-full inline-block align-bottom" alt="" loading="lazy" /> */}
                                {topic ?
                                    <Image
                                        src={topic?.user.image ?? ""}
                                        alt={topic?.user.name ?? ""}
                                        height={100}
                                        width={100}
                                        className="rounded-full w-full h-full inline-block align-bottom"
                                    />
                                    :
                                    <>
                                        <Skeleton count={1} className="inline-block rounded-full h-full w-full bg-gray-200 animate-pulse " />
                                    </>
                                }
                                {/* <Image
                                    src={topic?.user.image ?? ""}
                                    alt={topic?.user.name ?? ""}
                                    height={100}
                                    width={100}
                                    className="rounded-full w-full h-full inline-block align-bottom"
                                /> */}
                            </span>
                            <span className="mt-5 text-loginText sm:text-[1.25rem] text-[1.125rem] sm:leading-[1.5] font-[700] ">
                                {/* {topic?.user.name ?? ""} */}
                                {topic ?
                                    topic.user.name
                                    :
                                    <>
                                        <Skeleton className="inline-block rounded-[0.375rem] w-[10rem] h-[2rem] bg-gray-200 animate-pulse" />
                                    </>
                                }
                            </span>
                        </a>
                    </div>

                    <div className="...">
                        {userData?.id === userId
                            ?
                            <button onClick={handleRoute} className="w-full border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-block rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid bg-createAccountBG text-[#f9f9f9] ">
                                Edit Profile
                            </button>
                            :
                            <button className="w-full border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-block rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid bg-createAccountBG text-[#f9f9f9] ">
                                Follow
                            </button>
                        }
                    </div>

                    <div>
                        <ul className="">
                            <li className="mb-0 ">
                                <div className="text-[0.75rem] font-[700] text-leftBoxText uppercase">Joined</div>
                                <div>
                                    {topic ?
                                        "Sep 4, 2024"
                                        :
                                        <>
                                            <Skeleton className="inline-block rounded-[0.375rem] w-[8rem] h-full bg-gray-200 animate-pulse" />
                                        </>
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white text-leftBoxText md:rounded-[0.375rem] ">
                    <div className="py-[0.75rem] px-[1rem] border-b-[1px] border-b-solid border-b-bg ">
                        <h3 className="sm:text-[1.25rem] text-[1.125rem] sm:leading-[1.5] font-[700] text-[#242424] ">
                            Trending on <a href="https://dev.to">Dev Community</a> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24" role="img" aria-labelledby="ak0qrmk1dojdbl8qwzbsm7r99ufkjt8u" className="align-bottom"><title id="ak0qrmk1dojdbl8qwzbsm7r99ufkjt8u">Hot</title>
                                <g className="...">
                                    <path fill="#F4900C" d="M39 23a16.96 16.96 0 00-1.04-5.868c-.46 5.389-3.333 8.157-6.335 6.868-2.812-1.208-.917-5.917-.777-8.164.236-3.809-.012-8.169-6.931-11.794 2.875 5.5.333 8.917-2.333 9.125-2.958.231-5.667-2.542-4.667-7.042-3.238 2.386-3.332 6.402-2.333 9 1.042 2.708-.042 4.958-2.583 5.208-2.84.28-4.418-3.041-2.963-8.333A16.936 16.936 0 005 23c0 9.389 7.611 17 17 17s17-7.611 17-17z"></path>
                                    <path fill="#FFCC4D" d="M32.394 27.999c.148 3.084-2.561 4.293-4.019 3.709-2.106-.843-1.541-2.291-2.083-5.291s-2.625-5.083-5.708-6c2.25 6.333-1.247 8.667-3.08 9.084-1.872.426-3.753-.001-3.968-4.007A11.964 11.964 0 0010 34c0 .368.023.73.055 1.09C13.125 38.124 17.342 40 22 40s8.875-1.876 11.945-4.91c.032-.36.055-.722.055-1.09 0-2.187-.584-4.236-1.606-6.001z"></path>
                                </g>
                            </svg>
                        </h3>
                    </div>

                    <div>
                        <a href="#"
                            className="flex p-[1rem] border-b-[1px] border-b-solid border-b-bg text-loginText"
                        >
                            <span className="mr-2 shrink-0 inline-block rounded-full relative bg-black w-[24px] h-[24px] overflow-hidden align-middle ">
                                <img src="" className="" />
                            </span>
                            <div>
                                Building a Personal Finance App with Arcjet
                                <div className="text-[#717171] text-[0.875rem] pt-[0.25rem] -ml-1 ">
                                    <span className="mr-1">
                                        <span className="opacity-50">
                                            {/* Tags */}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                            className="flex p-[1rem] border-b-[1px] border-b-solid border-b-bg text-loginText"
                        >
                            <span className="mr-2 shrink-0 inline-block rounded-full relative bg-black w-[24px] h-[24px] overflow-hidden align-middle ">
                                <img src="" className="" />
                            </span>
                            <div>
                                Building a Personal Finance App with Arcjet
                                <div className="text-[#717171] text-[0.875rem] pt-[0.25rem] -ml-1 ">
                                    <span className="mr-1">
                                        <span className="opacity-50">
                                            {/* Tags */}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                            className="flex p-[1rem] border-b-[1px] border-b-solid border-b-bg text-loginText"
                        >
                            <span className="mr-2 shrink-0 inline-block rounded-full relative bg-black w-[24px] h-[24px] overflow-hidden align-middle ">
                                <img src="" className="" />
                            </span>
                            <div>
                                Building a Personal Finance App with Arcjet
                                <div className="text-[#717171] text-[0.875rem] pt-[0.25rem] -ml-1 ">
                                    <span className="mr-1">
                                        <span className="opacity-50">
                                            {/* Tags */}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </section>
        </div>
    )
};