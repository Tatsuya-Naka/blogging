'use client';
import Image from "next/image";
import ListPost from "./ListPost";
import { useState, useEffect } from "react";
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

export default function ProfileUser({ userData }: Props) {
    const [moreInfo, setMoreInfo] = useState(false);

    const handleInfo = () => {
        setMoreInfo(true);
    };

    const { data: topics, refetch: refetchTopics } = trpc.topic.getTopicsAllOne.useQuery();

    useEffect(() => {
        console.log(topics);
    }, [topics]);
    const items = topics?.length;

    return (
        <div className="box-border bg-bg h-full w-full">
            <div className="pt-[56px] block ">
                <div className="bg-custom-gradient ">
                    <div className="sm:pt-[4rem] pt-7 max-w-[1024px] text-[1rem] w-full mx-auto my-0 grid gap-[1rem] grid-cols-[1fr] md:px-[1rem] py-[1rem]">
                        <div className="mt-2 md:rounded-[0.375rem] bg-white text-engineBorderColor lg:p-[calc(1.5rem*-1)] md:text-center sm:p-[calc(1rem*-1)] p-[calc(-1*0.75rem)] ">
                            <div className="relative md:mt-[calc(-1*4rem)] md:mb-[0.75rem] mt-[calc(-1*2rem)] mb-[1rem] px-[1rem] ">
                                <span className="md:p-[0.5rem] md:w-[8rem] md:h-[8rem] w-[4rem] h-[4rem] bg-black p-[0.25rem] inline-block rounded-full overflow-hidden relative shrink-0 ">
                                    <Image
                                        src={userData?.image ?? ""}
                                        alt={userData?.name ?? "Admin"}
                                        width={128}
                                        height={128}
                                        className="h-full w-full rounded-full align-bottom inline-block"
                                    />
                                </span>

                                <div className="md:top-[4rem] flext right-0 top-[2rem] absolute left-0 justify-end flex pt-[1.5rem] pr-[1.5rem] ">
                                    <button className="border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-block rounded-[0.375rem] leading-[1.5rem] font-[500] items-center border-solid bg-createAccountBG hover:bg-createBorderHover border-transparent text-[#f9f9f9] shadow-custom-light-border ">
                                        Edit profile
                                    </button>
                                </div>
                            </div>

                            <div className="p-[1rem] ">
                                <div className="mb-2 items-center ">
                                    <h1 className="leading-[1.25] sm:text-[1.875rem] text-[#090909] text-[1.5rem] inline-flex min-h-[40px] items-center font-[700] ">
                                        {userData?.name}
                                    </h1>
                                </div>

                                <p className="md:text-[1.125rem] max-w-75 text-[1rem] mb-4 mx-auto text-[#242424] ">
                                    404 bio not found
                                </p>

                                <div className="flex md:justify-center md:ml-0 text-[0.875rem] text-[#717171] mb-[0.5rem] flex-wrap items-center ml-[calc(-1*0.25rem)]">
                                    <span className="flex md:justify-center md:px-[0.75rem] md:py-[0.25rem] flex items-center p-[0.5rem] w-full overflow-hidden text-ellipsis">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aarob9o1bz97u6xmvy2783396qp1x8gr" className="mr-2 shrink-0"><title id="aarob9o1bz97u6xmvy2783396qp1x8gr">Joined</title>
                                            <path d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 012.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 01-1 1H4a1 1 0 01-1-1v-4.36a4.025 4.025 0 01-.972-2.182l-.022-.253L2 14v-1a3 3 0 012.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 00-.993.883L4 13v.971l.003.147a2 2 0 003.303 1.4c.363-.312.602-.744.674-1.218l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 003.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 003.99 0L20 14v-1a1 1 0 00-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 11-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 01-2.898-.776C15.85 2.002 17 2.5 17 1z"></path>
                                        </svg>
                                        <span className="overflow-hidden text-ellipsis">
                                            Jonined on <span>Sep 4, 2024</span>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className={`md:hidden p-3 ${moreInfo ? "hidden" : "block"}`}>
                                <button onClick={handleInfo} className="my-3 w-full bg-transparent hover:bg-buttonHover border-[#d6d6d7] hover:border-[#a3a3a3] text-[#3d3d3d] border-[2px] py-[0.5rem] px-[1rem] text-[1rem] relative inline-block rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center border-solid ">
                                    More info about @{userData?.id}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:pt-0 pt-4 md:grid-cols-[2fr_5fr] max-w-[1024px] text-[1rem] mx-auto my-0 grid gap-[0.5rem] md:p-[1rem] ">
                    <div className="min-w-0 block w-[2fr] ">
                        <div className={`md:grid md:gap-[1rem] ${moreInfo ? "grid" : "hidden"}`}>
                            <div className="p-4 bg-white text-loginText shadow-custom-light-border rounded-[0.375rem] ">
                                <div className="flex mb-4 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a5i3frtjtu8pg80mdompe0k8rbu6737l" className="mr-3 align-bottom color-base-50"><title id="a5i3frtjtu8pg80mdompe0k8rbu6737l">Post</title>
                                        <path d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"></path>
                                    </svg>
                                    <div className="flex gap-1">
                                        <span>{items}</span> 
                                        {items && items > 2 ? "posts" : "post"} published
                                    </div>
                                </div>
                                <div className="flex mb-4 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aov67ykbuwonx412xyaokxio891up7zy" className="mr-3 align-bottom color-base-50"><title id="aov67ykbuwonx412xyaokxio891up7zy">Comment</title>
                                        <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                                    </svg>
                                    <div className="flex gap-1">
                                        <span> 0 </span> comments written
                                    </div>
                                </div>
                                <div className="flex items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4yfhix4jtf3mbi28kvuhi067xmth8sb" className="mr-3 align-bottom color-base-50"><title id="a4yfhix4jtf3mbi28kvuhi067xmth8sb">Tag</title>
                                        <path d="M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011 0h3.99l.42-4h-3.99l-.42 4z"></path>
                                    </svg>
                                    <div className="flex gap-1">
                                        <span>0</span> tags followed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 block">
                        {topics?.map((topic) => {
                            return (
                                <ListPost
                                    key={topic.id ?? ""}
                                    image={topic.user.image ?? ""}
                                    user={topic.user.name ?? ""}
                                    title={topic.title ?? ""}
                                    url={`/topic/${topic.user.id}/${topic.id}`}
                                />
                            )
                        })}
                        {/* <ListPost userData={userData} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
};