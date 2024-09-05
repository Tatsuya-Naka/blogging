import { CiBookmark } from "react-icons/ci";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa6";

type CustomeType = {
    image: string,
    user: string,
    team: string,
    date: string,
    title: string,
    tags: string[],
    reactions: number,
    comments: number, 
    record: number,
};

export default function Pages({ image, user, team, date, title, tags, reactions, comments, record }: CustomeType) {
    return (
        <div className="shadow-md bg-white rounded-lg">
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
        </div>
    )
};