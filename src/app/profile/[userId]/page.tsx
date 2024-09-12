import { HydrateClient } from "~/trpc/server"
import WithHeader from "~/app/components/WithHeader"
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import ProfileUser from "~/app/components/profile/Profile";

export default async function Profile() {
    const session = await getServerAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    return (
        <HydrateClient>
            <WithHeader userData={session?.user} />
            <main className="flex-auto min-h-screen text-[18px] box-border bg-bg w-full h-full">
                <ProfileUser userData={session?.user} />
            </main>
        </HydrateClient>
    )
};