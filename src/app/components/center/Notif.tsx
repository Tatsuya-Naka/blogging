// import Link from "next/link"
import Image from "next/image"
import { CgMoreAlt } from "react-icons/cg";
import { StaticImageData } from 'next/image';

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
        <div className="shadow-md bg-white rounded-lg">
            <div className="px-6 py-5 flex flex-col gap-4">
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="hover:bg-blue-100 px-3 py-3 rounded-md hover:text-black-400">
                        <CgMoreAlt />
                    </div>
                </div>
                <div className="...">
                    <div className="flex flex-col gap-3 px-20">
                        <Image
                            src={image || ""}
                            alt={title}
                            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
                        />
                        <div className="text-center">
                            <h3 className="font-bold text-2xl">{title}</h3>
                        </div>
                        <div>
                            <p>{subtitle}</p>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <p>{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};