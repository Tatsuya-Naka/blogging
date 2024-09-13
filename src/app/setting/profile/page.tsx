import { HydrateClient } from "~/trpc/server"
import WithHeader from "~/app/components/WithHeader"
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import EditProfile from "~/app/components/setting/profile/EditProfile";

export default async function SettingProfile() {
    const session = await getServerAuthSession();
    if (!session?.user) {
        redirect("/");
    }
    
    return (
        <HydrateClient>
            <WithHeader userData={session?.user} />
            <main className="flex-auto min-h-screen text-[18px] pt-[56px] box-border bg-bg w-full h-full">
                <EditProfile userData={session?.user} />
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