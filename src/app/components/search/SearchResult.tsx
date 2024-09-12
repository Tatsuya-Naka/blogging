'use client';
import { useEffect, useState } from "react";
import Pages from "../center/Pages";
import { trpc } from "~/server/utils/trpc";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType,
};

export default function SearchResult({ userData }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const [typing, setTyping] = useState(query);
    const { data: result, refetch: refetchResult } = trpc.topic.getSearching.useQuery({
        typing: typing,
    });

    useEffect(() => {
        console.log("Searching for ", query);
        console.log("Result: ", result);
    }, [result]);

    const handleTyping = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTyping((e.target as HTMLInputElement).value);
    };

    const url = `/search?query=${typing}`;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(url);
    };

    return (
        <div className="col-start-1 col-span-2 md:gap-[1rem] mx-auto max-w-[1024px] text-[1rem] mx-auto my-0 grid lg:p-[1rem] md:p-[0.5rem] p-0">
            <div className="sm:flex p-0 max-w-[1024px] w-full mx-auto my-0 items-center justify-between lg:p-0 p-[0.75rem] ">
                <div className="md:hidden block mb-2 box-border ">
                    <form className="block box-border w-full" onSubmit={handleSubmit}>
                        <div className="flex-row flex-wrap">
                            <div className="relative flex-1 flex flex-col text-[1rem]">
                                <input
                                    type="text"
                                    id="search"
                                    className="pl-[40px] pr-[142px] leading-relaxed py-[calc(0.5rem-2.5px)] px-0.5rem text-[1rem] w-full resize-y border-[1.5px] border-borderColor appearance-none rounded-[0.375rem] transition-all duration-100 ease-custom-bezier"
                                    placeholder="Search..."
                                    // value={typing}
                                    onChange={handleTyping}
                                />
                                
                                <button
                                    type="submit"
                                    className="absolute py-0 mt-0 right-auto inset-px p-[0.5rem] bg-transparent hover:bg-logInBg text-engineBorderColor hover:text-createBorderHover inline-block rounded-[0.375rem] text-center rounded-none"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                                        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>

                <h1 className="sm:block sm:text-[1.875rem] text-[#090909] text-[1.5rem] inline-flex items-center sm:leading-[1.5] font-[700] leading-[1.25]  ">
                    Search result {query && <span>for {query}</span>}
                </h1>
                <nav className="md:mx-0 -mx-3 box-border ">
                    <ul className="flex  py-[0.25rem] my-[calc(-1*0.25rem)]">
                        <li className="">
                            <a href="#"
                                className="sm:text-[#090909] bg-none sm:inline-flex px-[0.75rem] py-[0.5rem] text-[#575757] relative rounded-[0.375rem] font-[700]"
                            >
                                Most Relevant
                            </a>
                        </li>
                        <li className="">
                            <a href="#"
                                className="sm:text-[#090909] bg-none sm:inline-flex px-[0.75rem] py-[0.5rem] text-[#575757] relative rounded-[0.375rem]"
                            >
                                Newest
                            </a>
                        </li>
                        <li className="">
                            <a href="#"
                                className="sm:text-[#090909] bg-none sm:inline-flex px-[0.75rem] py-[0.5rem] text-[#575757] relative rounded-[0.375rem]"
                            >
                                Oldest
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav className="block -mx-3 ">
                    <ul className="py-[0.5rem] px-[0.75rem] flex overflow-x-auto ">
                        <li>
                            <a href="#"
                                className="font-[700] text-[#090909] inline-flex py-[0.5rem] px-[0.75rem] relative rounded-[0.375rem] "
                            >
                                Posts
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="font-[500] text-[#272727] inline-flex py-[0.5rem] px-[0.75rem] relative rounded-[0.375rem] "
                            >
                                My posts only
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="lg:grid-cols-[240px_1fr] md:grid-cols-[2fr_5fr] max-w-[1024px] text-[1rem] mx-auto my-0 grid lg:gap-[1rem] md:gap-[0.5rem] ">
                <div className="sm:block hidden lg:w-[240px] md:w-[2fr]">
                    <ul className="m-0 p-0 sm:block py-[0.25rem] my-[calc(-1*0.25rem)] ">
                        <li>
                            <a href="#"
                                className="sm:bg-white font-[700] text-[#090909] sm:flex sm:p-[0.5rem] inline-flex py-[0.5rem] px-[0.75rem] relative rounded-[0.375rem] "
                            >
                                Posts
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="sm:bg-transparent font-[500] text-[#272727] sm:flex sm:p-[0.5rem] inline-flex py-[0.5rem] px-[0.75rem] relative rounded-[0.375rem] "
                            >
                                My posts only
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="min-w-0 ">
                    <div>
                        {result?.map((result) => {
                            return (
                                <Pages
                                    userData={userData}
                                    key={result?.id}
                                    userId={result.user.id}
                                    image={result.user.image ?? ""}
                                    user={result.user.name ?? ""}
                                    team={result.user.name ?? ""}
                                    date={"Sep 1"}
                                    title={result.title ?? ""}
                                    tags={[]}
                                    reactions={5}
                                    comments={3}
                                    record={4}
                                    url={`/topic/${result?.user.id}/${result?.id}`}
                                    bio={"Thank you"}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
};