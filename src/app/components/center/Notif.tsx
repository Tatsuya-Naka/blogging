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

export default function Notif({ category, title, subtitle, image, link, description, comment, userData }: Type) {
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

                <button className="rounded-[0.375rem] p-[0.25rem] bg-transparent hover:bg-buttonHover text-[#3d3d3d] hover:text-[#090909]">
                    <VscChromeClose className="h-[18.72px] w-[18.72px]" />
                </button>
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

                    <h2 className="text-[1.5rem] font-[700] leading-[1.25] p-0">
                        <a href="#">
                            Heads up
                        </a>
                    </h2>

                    <div className="shadow-customForCenterPage rounded-customForCenterPage flex block w-full border-[1px] border-solid border-borderColor mt-[0.95rem] mb-[1.2rem]">
                        <a
                            href="#"
                            className="text-engineBorderColor"
                        >
                            <div
                                className="w-[60px] h-[60px] relative inline-block box-border rounded-[0.375rem] pt-[calc(8px+0.4vw)] pr-[10px] pl-[calc(8px+0.8vw)] pb-[calc(8px+0.8vw)] "
                            >
                                <img src="https://media.dev.to/cdn-cgi/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1%2Fd908a186-5651-4a5a-9f76-15200bc6801f.jpg" alt="The DEV Team" width="33" height="33" loading="lazy" className="rounded-[0.375rem]"></img>
                                <div
                                    className="border-[2px] border-solid border-white w-[15px] h-[15px] inline-block absolute right-[3px] bottom-[calc(1vw)] bg-leftBoxText box-border max-w-[38px] max-h-[38px] rounded-full"
                                >
                                    <Image 
                                        src="https://media.dev.to/cdn-cgi/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1%2Ff451a206-11c8-4e3d-8936-143d0a7e65bb.png"
                                        alt="image"
                                        height={15}
                                        width={15}
                                        className="absolute top-0 rounded-full"
                                    />

                                    {/* <img src="https://media.dev.to/cdn-cgi/image/width=775%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1%2Ff451a206-11c8-4e3d-8936-143d0a7e65bb.png" alt="" width="150" height="150" loading="lazy"></img> */}
                                </div>
                            </div>
                        </a>

                        <a className="w-full box-border">
                            <div className="p-[16px] w-full pl-0 box-border" >
                                <h2 className="text-[1.25em] leading-[1.28em] font-[700] w-full">Introducing DEV++</h2>
                                <h3 className="my-[5.32px] text-[0.875rem] text-leftBoxText leading-[1.25]">Ben Helpern for the DEV Team ・ Aug</h3>
                                <div
                                    className="leading-[1] text-[0.88em] mb-[5px] text-loginText flex gap-2"
                                >
                                    <span className="mr-[calc(0.02vw + 4px)] text-[0.9em] ml-[1px]">#meta</span>
                                    <span className="mr-[calc(0.02vw + 4px)] text-[0.9em] ml-[1px]">#news</span>
                                    <span className="mr-[calc(0.02vw + 4px)] text-[0.9em] ml-[1px]">#productivity</span>
                                    <span className="mr-[calc(0.02vw + 4px)] text-[0.9em] ml-[1px]">#career</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <p>
                        Happy coding
                    </p>
                </div>
            </div>
        </div>

    )
};