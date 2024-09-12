import { HydrateClient } from "~/trpc/server";
import WithHeader from "../components/WithHeader";
import { getServerAuthSession } from "~/server/auth";

export default async function Research() {
    const session = await getServerAuthSession();

    return (
        <HydrateClient>
            <WithHeader userData={session?.user} />
            <main className="flex-auto min-h-screen text-[18px] box-border bg-bg w-full h-full">
                
            </main>
        </HydrateClient>
    );
};