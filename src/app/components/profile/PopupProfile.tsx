import Image from "next/image";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType;
    userId: string;
    image: string | null;
    userName: string | null;
    bio: string | null;
};


export default function PopupProfile({ userData, userId, image, userName, bio }: Props) {
    return (
        <div className="absolute z-[400] sm:w-[360px] shadow-customForCenterPage grid pt-0 p-4 gap-4 bg-white rounded-[0.375rem] border-t-[2rem] border-t-solid border-t-createAccountBG">
            <div className="-mt-4 ">
                <a href={`/user/${userId}`}
                    className="flex "
                >
                    <span className="mr-2 shrink-0 w-[3rem] h-[3rem] inline-block rounded-full relative bg-leftBoxText overflow-hidden align-middle ">
                        {/* <img src="https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2023473%2F6e1b385a-4152-4773-a392-598d4981575d.png" className="rounded-full w-full h-full inline-block align-bottom" alt="" loading="lazy" /> */}
                        <Image
                            src={image ?? ""}
                            alt={userName ?? ""}
                            height={100}
                            width={100}
                            className="rounded-full w-full h-full inline-block align-bottom"
                        />
                    </span>
                    <span className="mt-5 text-loginText sm:text-[1.25rem] text-[1.125rem] sm:leading-[1.5] font-[700] ">
                        {userName ?? ""}
                    </span>
                </a>
            </div>

            <div className="...">
                <button className="w-full border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-block rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid bg-createAccountBG text-[#f9f9f9] ">
                    {userData?.id === userId ?
                        "Edit profile" :
                        "Follow"
                    }
                </button>
            </div>

            <div className="text-[#575757] ">
                {bio}
            </div> 

            <div>
                <ul className="">
                    <li className="mb-0 ">
                        <div className="text-[0.75rem] font-[700] text-leftBoxText uppercase">Joined</div>
                        <div>
                            Sep 4, 2024
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};