import { HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import MainSearch from "../components/search/Main";

export default async function Research() {
    const session = await getServerAuthSession();

    return (
        <HydrateClient>
            <MainSearch userData={session?.user} />
        </HydrateClient>
    );
};