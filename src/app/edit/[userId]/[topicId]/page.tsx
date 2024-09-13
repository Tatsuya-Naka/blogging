import { HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import EditTopicContent from "~/app/components/edit/EditTopicContent";

export default async function EditTopic() {
    const session = await getServerAuthSession();

    return (
        <HydrateClient>
            <EditTopicContent userData={session?.user} />
        </HydrateClient>
    );
};