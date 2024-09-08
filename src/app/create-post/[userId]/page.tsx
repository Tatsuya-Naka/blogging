// import Header from "../../../components/Header"
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { HydrateClient } from "~/trpc/server";
import PostMain from "~/app/components/header/PostHeader";

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
            <div className="flex flex-col items-center">
                <PostMain userData={session.user} />
            </div>
        </HydrateClient>
    )
};