import { HydrateClient } from "~/trpc/server"
import WithHeader from "~/app/components/WithHeader"
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import ProfileForVisitors from "~/app/components/user/ProfileForVisitors";

export default async function VisitProfile() {
    const session = await getServerAuthSession();

    return (
        <HydrateClient>
            <WithHeader userData={session?.user} />
            <main className="flex-auto min-h-screen text-[18px] box-border bg-bg w-full h-full">
                <ProfileForVisitors userData={session?.user} />
            </main>
        </HydrateClient>
    )
};