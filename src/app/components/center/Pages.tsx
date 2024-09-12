import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa6";

type CustomeType = {
    key: string
    image: string,
    user: string,
    team: string,
    date: string,
    title: string,
    tags: string[],
    reactions: number,
    comments: number,
    record: number,
    url: string,
};

export default function Pages({ key, image, user, team, date, title, tags, reactions, comments, record, url }: CustomeType) {
    
    return (
        <div className="md:p-[1.25rem] p-[1rem] sm:text-[1.5rem] bg-white shadow-custom-light-border mb-[0.5rem] relative md:rounded-customForCenterPage">
            <a
                href={url}
                className="pointer-events-none opacity-0 absolute top-0 right-0 bottom-0 left-0 text-createAccountBG "
            >
                {/* How do you raise funds for an open-source project? */}
                {title}
            </a>
            <div
                className="box-border block "
            >
                <div className="md:mb-[0.5rem] flex items-center justify-between ">
                    <div className="flex items-center leading-[1.25] text-[0.875rem] ">
                        <div className="relative mr-[0.5rem] ">
                            <a
                                href="#"
                                className="w-[2rem] h-[2rem] inline-block relative rounded-full bg-leftBoxText overflow-hidden shrink-0"
                            >
                                {/* <Image 
                                    src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1672505%2Ffcc02484-f159-4dac-a949-3444807ab84d.png"
                                    alt="image"
                                    height={}
                                /> */}
                                {/* <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1672505%2Ffcc02484-f159-4dac-a949-3444807ab84d.png" alt="paul_freeman profile"
                                    className="rounded-full h-full w-full inline-block align-bottom "
                                    loading="lazy"></img> */}
                                    <Image 
                                        src={image}
                                        alt={user}
                                        width={90}
                                        height={90}
                                        className="rounded-full h-full w-full inline-block align-bottom"
                                    />
                            </a>
                        </div>

                        <div className="relative mr-[0.5rem] block">
                            <div className="...">
                                <a className="md:hidden font-[500] text-loginText ">
                                    {user}
                                </a>

                                <div className="md:inline-block hidden sm:mb-0 relative font-[500] ">
                                    <button
                                        className="text-[0.875rem] p-1 ml-[calc(0.25*-1)] -my-2 bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909] border-0"
                                    >
                                        {user}
                                    </button>
                                </div>
                            </div>

                            <a className="text-[0.75rem] text-leftBoxText ">
                                <p className="pl-1">{date}</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:pl-[2.5rem] box-border block">
                    <h2
                        className="md:mb-[0.25rem] text-engineBorderColor text-[1.5rem] "
                    >
                        <a
                            href={url}
                            className="block hover:text-createBorderHover font-bold text-[1.5rem] "
                        >
                            {title}
                        </a>
                    </h2>

                    <div className="mb-[0.5rem] ml-[calc(0.25rem*-1)] text-[0.875rem] flex flex-wrap gap-1 text-[#3d3d3d] ">
                        <a
                            href="#"
                            className="bg-transparent hover:bg-tagBg text-engineBorderColor rounded-[0.375rem] inline-flex items-center p-custom "
                        >
                            <span>#</span>
                            discuss
                        </a>
                        <a
                            href="#"
                            className="bg-transparent hover:bg-tagBg text-engineBorderColor rounded-[0.375rem] inline-flex items-center p-custom "
                        >
                            <span>#</span>
                            discuss
                        </a>
                        <a
                            href="#"
                            className="bg-transparent hover:bg-tagBg text-engineBorderColor rounded-[0.375rem] inline-flex items-center p-custom "
                        >
                            <span>#</span>
                            discuss
                        </a>
                        <a
                            href="#"
                            className="bg-transparent hover:bg-tagBg text-engineBorderColor rounded-[0.375rem] inline-flex items-center p-custom "
                        >
                            <span>#</span>
                            discuss
                        </a>
                    </div>

                    <div className="flex justify-between items-center text-[0.875rem] leading-[1.25] box-border ">
                        <div className="flex ml-[calc(0.5rem*-1)]">
                            <a
                                href="#"
                                className="pl-[0.5rem] bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909] px-[0.25rem] py-[0.75rem] text-[0.875rem] flex gap-[0.5rem] rounded-[0.375rem] leading-[1.5rem] items-center border-0 border-solid "
                            >
                                <div className="flex items-center ">
                                    <span className="flex items-center ">
                                        <span className="inline-block bg-bg border-[2px] border-solid border-white rounded-[15px] mr-[-0.75em] w-[28px] h-[28px]">
                                            <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="18" height="18" />
                                        </span>
                                        <span className="inline-block bg-bg border-[2px] border-solid border-white rounded-[15px] mr-[-0.75em] w-[28px] h-[28px]">
                                            <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="18" height="18" />
                                        </span>
                                        <span className="inline-block bg-bg border-[2px] border-solid border-white rounded-[15px] mr-[-0.75em] w-[28px] h-[28px]">
                                            <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="18" height="18" />
                                        </span>
                                    </span>
                                    <span className="ml-[1em] flex gap-1 items-center font-[300]">
                                        8
                                        <span className="sm:inline hidden">reactions</span>
                                    </span>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="flex items-center pl-[0.5rem] bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909] px-[0.25rem] py-[0.75rem] text-[0.875rem] flex gap-[0.5rem] rounded-[0.375rem] leading-[1.5rem] items-center border-0 border-solid"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="aneazmichuqc2e2kwgp5dlttmpbtk6mt" className="mr-[0.25rem]"><title id="aneazmichuqc2e2kwgp5dlttmpbtk6mt">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                                6
                                <span className="sm:inline hidden">comments</span>
                            </a>
                        </div>

                        <div className="flex items-center box-border ">
                            <div className="text-[0.75rem] mr-2 text-leftBoxText ">
                                1 min read
                            </div>

                            <button className="relative inline-block rounded-[0.375rem] text-center bg-transparent text-editColor">
                                <span className="inline-flex">
                                    {/* <CiBookmark className="h-[24px] w-[24px]"/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true"><path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="shadow-md bg-white rounded-lg">
                <div className="px-5 py-2 flex gap-4">
                    <div>
                        <Image
                            src={image}
                            alt={user}
                            width={40}
                            height={40}
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <div>
                                {user} {team && `for ${team}`}
                            </div>
                            <div className="text-gray-400 text-sm">
                                {date}
                            </div>
                        </div>
                        <div className="font-bold text-2xl">
                            {title}
                        </div>
                        <div className="flex gap-2">
                            {tags.map((tag, index) => {
                                return <span key={index}>#{tag}</span>;
                            })}
                        </div>
                        <div className="py-3 flex justify-between items-center">
                            <div className="flex text-gray-500 gap-10 text-sm">
                                <p className="...">{reactions} reactions</p>
                                <div className="flex items-center gap-2">
                                    <FaRegComment />
                                    <p>{comments} comments</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center text-gray-500">
                                <p className="text-sm">{record} min read</p>
                                <div className="font-bold text-lg">
                                    <CiBookmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
};