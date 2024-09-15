'use client';
import { integer } from "aws-sdk/clients/cloudfront";
import Image from "next/image";
import internal from "stream";
type CustomeType = {
    key: string,
    image: string,
    user: string,
    title: string,
    url: string,
};

export default function ListPost({ key, image, user, title, url }: CustomeType) {


    return (
        <div className="">
            <div className="md:p-[1.25rem] sm:p-[1rem] sm:text-[1.5rem] bg-white shadow-custom-light-border mb-[0.5rem] relative rounded-[0.375rem] px-[1rem] pt-[1rem] pb-[0.75rem] text-[1.25rem] ">
                <a href={url}
                    className="absolute top-0 right-0 bottom-0 left-0"
                />
                <div className="">
                    <div className="md:mb-[0.5rem] flex items-center justify-between mb-[0.75rem] ">
                        <div className="flex items-center leading-[1.25] text-[0.875rem] ">
                            <div className="relative mr-[0.5rem]">
                                <a href="#"
                                    className="w-[2rem] h-[2rem] rounded-full inline-block relative bg-leftBoxText overflow-hidden align-middle shrink-0 "
                                >
                                    <Image 
                                        src={image ?? ""}
                                        alt={user ?? ""}
                                        width={90}
                                        height={90}
                                        className="rounded-full h-8 w-8 inline-block"
                                    />
                                </a>
                            </div>

                            <div className="flex flex-col">
                                <div className="md:inline-block sm:mb-0 relative font-[500] mb-4 ">
                                    {user}
                                </div>

                                <a href="#" className="text-[0.75rem] text-leftBoxText ">
                                    Sep 11
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:pl-[2.5rem] ">
                        <h2 className="md:mb-[0.25rem] hover:text-loginHover text-engineBorderColor leading-[1.25] text-[1.5rem] mb-[0.25rem] ">
                            <a href={url} className="text-[1.5rem] font-[700]">
                                {/* Title */}
                                {title}
                            </a>
                        </h2>

                        <div className="mb-[0.5rem] ml-[calc(0.25rem*-1)] text-[0.875rem] flex flex-wrap gap-[1px] text-[#3d3d3d] ">

                        </div>

                        <div className="flex justify-between items-center text-[0.875rem] leading-[1.25] ">
                            <div className="flex ml-[calc(0.5rem * -1)] ">
                                <a href="#" className="flex items-center pl-[0.5rem] bg-transparent hover:bg-custom-light-border text-[#3d3d3d] px-[0.25rem] py-[0.75rem] text-[0.875rem] border-0 leading-[1.5rem] text-center border-solid">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="anqfesk3r4v7g4cevmt09fvub3hcx505" className="mr-[0.25rem] "><title id="anqfesk3r4v7g4cevmt09fvub3hcx505">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                </a>
                                <span className="sm:flex hidden items-center">Add Comment</span>
                            </div>

                            <div className="flex items-center ">
                                <div className="text-[0.75rem] mr-2 text-leftBoxText">1 min read</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};