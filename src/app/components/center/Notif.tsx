import Link from "next/link"
import Image from "next/image"
import { CgMoreAlt } from "react-icons/cg";

export default function Notif({ category, title, subtitle, image, link, description, comment, session }: any) {
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
                            src={image}
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