import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import Header from "../components/Header";
import { HydrateClient } from "~/trpc/server";
import CenterPage from "../components/CenterPage";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const HomePage = async () => {
    const session = await getServerAuthSession();
    if (!session?.user) {
        redirect("/");
    }

    return (
        <HydrateClient>
            <Header session={session} />
            <main className="px-8 py-16 w-full bg-gray-100">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-1">
                        <LeftSide />
                    </div>
                    <div className="col-span-3">
                        <CenterPage session={session}/>
                    </div>
                    <div className="col-span-2">
                        <RightSide />
                    </div>
                    {/* <LeftSide />
                    <CenterPage />
                    <RightSide /> */}
                </div>
            </main>
        </HydrateClient>
    )
}

export default HomePage;