'use client';
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
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

export default function DeleteTopic({ userData }: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const userId = pathname.split('/')[3] ?? '';
    const topicId = pathname.split('/')[4] ?? '';

    useEffect(() => {
        console.log("User: ", userId);
        console.log("topic: ", topicId);
    });

    const deleteMutation = trpc.topic.deleteTopic.useMutation();

    const handleDelete = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const deletedTopic = await deleteMutation.mutateAsync({topicId});
            console.log("Deleted topic: ", deletedTopic);
            router.push('/home');
        } catch(err) {
            console.log("Error occured during deleting process: ", err);
        }
    };

    return (
        <div className="top-[56px]">
            <div className="gap-0 w-[1024px] text-[1rem] w-full grid grid-cols-[1fr] mx-auto my-0 p-[1rem] ">
                <div className="md:mx-6 -mb-1 mt-3 text-loginText shadow-custom-light-border bg-white text-[1.125rem] px-[4rem] py-[2rem] ">
                    Testing
                </div>

                <div className="text-engineBorderColor shadow-custom-light-border rounded-[0.375rem] bg-white px-[4rem] py-[2rem]">
                    <h1 className="mb-2 sm:text-[1.5rem] text-[1.25rem] sm:leading-[1.5] font-[700] text-[#242424] leading-[1.25] ">
                        Are you sure you want to delete this article?
                    </h1>

                    <p className="text-[1.125rem] mb-4 ">
                        You cannot undo this action, perhaps you just want to <a href="#" className="text-createAccountBG">unpublish</a> instead?
                    </p>

                    <form className="box-border flex gap-1">
                        <button onClick={handleDelete} className="bg-red-600 text-white px-[1rem] py-[0.5rem] text-[1rem] leading-[1.5rem] font-[500] text-center rounded-md hover:bg-red-500">
                            Delete
                        </button>
                        <a href="" className="px-[1rem] py-[0.5rem] text-[1rem] leading-[1.5rem] font-[500] text-center rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 ">
                            Unpublish
                        </a>
                        <a href={`/topic/${userId}/${topicId}`} className="px-[1rem] py-[0.5rem] text-[1rem] leading-[1.5rem] font-[500] text-center rounded-md bg-transparent hover:bg-buttonHover">
                            Dismiss
                        </a>
                    </form>
                </div>
            </div>
        </div>
    )
};