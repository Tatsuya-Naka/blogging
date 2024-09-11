import WithHeader from "~/app/components/WithHeader";
import { api, HydrateClient } from "~/trpc/server";
import { getServerAuthSession } from "~/server/auth";
import TopicCenter from "~/app/components/topic/CenterPage";
import TopicRight from "~/app/components/topic/RightSide";
import TopicLeft from "~/app/components/topic/LeftSide";

export default async function Topic() {
    const session = await getServerAuthSession();

    void api.post.getLatest.prefetch();

    return (
        <HydrateClient>
            <WithHeader userData={session?.user} />
            <main className="block flex-1 pt-[56px] text-[18px] box-border bg-bg">
                <div className="block box-border">
                    <div
                        className="text-[1rem] w-full max-w-[1380px] mx-auto grid md:gap-[0.5rem] md:grid-cols-[4rem_1fr] lg:grid-cols-[4rem_7fr_3fr] md:p-[1rem] lg:gap-[1rem]  "
                    >
                        <TopicLeft />
                        <TopicCenter userData={session?.user} />
                        <TopicRight userData={session?.user}/>
                    </div>
                </div>
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
        </HydrateClient>
    )
};