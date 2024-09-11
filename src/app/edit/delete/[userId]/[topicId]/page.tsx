import WithHeader from "~/app/components/WithHeader"
import { HydrateClient, api } from "~/trpc/server"
import { getServerAuthSession } from "~/server/auth";
import DeleteTopic from "~/app/components/topic/Delete";

export default async function Delete() {
    const session = await getServerAuthSession();

    void api.post.getLatest.prefetch();

    return (
        <HydrateClient>
            <div className="flex flex-col">
                <WithHeader userData={session?.user} />
                <main className="text-[18px] flex-auto box-border block bg-bg pt-[56px] h-[530px]">
                    <DeleteTopic userData={session?.user} />
                </main>
                <footer
                    className="p-[3rem] bg-engineMarkBG text-loginText"
                >
                    <div className="py-[0.25rem] max-width-[1380px] mx-auto flex flex-col gap-[0.5rem] ">
                        <div className="text-center">
                            <p className="font-bold mb-[10px] ">
                                Thank you to our Diamond Sponsor Neon for supporting our community.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </HydrateClient>
    )
};