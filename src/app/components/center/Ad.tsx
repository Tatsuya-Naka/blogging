// import Link from "next/link"
import Image from "next/image"
import { CgMoreAlt } from "react-icons/cg";
import { StaticImageData } from 'next/image';
import { FiMoreHorizontal } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

// interface Props {
//     userData?: CustomType
// };

type Type = {
    category: string;
    title: string;
    subtitle: string;
    image: StaticImageData;
    link: string;
    description: string;
    comment: string;
    userData?: CustomType;
};

export default function Ad({ category, title, subtitle, image, link, description, comment, userData }: Type) {
    return (
        <div className="md:p-[1.25rem] p-[1rem] text-[1.5rem] w-full shadow-custom-light-border relative bg-white mb-[0.5rem] rounded-custom">
            <div className="flex md:mb-[0.5rem] mb-[0.75rem] items-center justify-between ">
                <div className="relative w-full flex items-center justify-between">
                    <div className="text-leftBoxText text-[0.875rem] leading-[1.5] ml-[0.25rem] ">
                        DEV Launch
                    </div>
                    <button className="p-[0.25rem] rounded-[0.375rem] bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909]">
                        <FiMoreHorizontal className="h-[18.72px] w-[18.72px]" />
                    </button>
                </div>
                {/* 
                <button className="rounded-[0.375rem] p-[0.25rem] bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909]">
                    <VscChromeClose className="h-[18.72px] w-[18.72px]" />
                </button> */}
            </div>

            <div className="md:px-[2.5rem] w-full">
                <div className="text-[1rem] flex flex-col w-full">
                    <p className="mb-[1.25rem] text-center">
                        <a href="#">
                            <Image
                                src={image || ""}
                                alt={title}
                                height={450}
                                width={440}
                                className="h-auto object-contain block w-full max-h-[calc(180px+50vh)] mx-auto rounded-[0.375rem]"
                            />
                        </a>
                    </p>

                    <h3 className="text-[1.25rem] font-[700] mb-[calc(1.25rem/2)] leading-[1.25] p-0">
                        <a href="#">
                            Need to stay up-to-date with the software world?
                        </a>
                    </h3>
                    <p className="mb-[1.25rem]">Look no further</p>
                    <p className="mb-[1.25rem]">
                        You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date.
                    </p>
                    <h2 className="text-[1.5rem] mb-[calc(1.25rem/2)] font-[700] leading-[1.25] ">
                        <a
                            href={userData ? `/create-post/${userData.id}` : "/"}
                            className="underline text-createAccountBG"
                        >
                            Start now
                        </a>
                    </h2>


                    <p>
                        Happy coding
                    </p>
                </div>
            </div>
        </div>

    )
};