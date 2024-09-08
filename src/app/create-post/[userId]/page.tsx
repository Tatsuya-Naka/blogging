// import Header from "../../../components/Header"
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { HydrateClient } from "~/trpc/server";
import PostMain from "~/app/components/header/PostHeader";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Main from "../Main";

export default async function Post({ params }: { params: { userId: string } }) {
    const session = await getServerAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    if (session.user.id !== params.userId) {
        redirect("/home");
    }

    return (
        <HydrateClient>
            <div className="flex-auto text-[18px] box-border">
                <div>
                    <Main userData={session?.user} />
                </div>
            </div>
        </HydrateClient>
    )
};