import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Header from "../components/Header";
import CenterPage from "../components/CenterPage";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import WithHeader from "../components/WithHeader";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <WithHeader userData={session?.user}/>
      <main className="block box-border flex-1 flex text-[18px] pt-[56px] min-h-[calc(100vh - 56px)] bg-bg">
        <div className="w-full">
          <div className="text-[1rem] w-full max-w-[1380px] my-0 mx-auto grid gap-[1rem] md:p-[1rem] md:ç lg:grid-cols-[240px_2fr_1fr]">
            <div className="md:block hidden min-w-0">
              <LeftSide />
            </div>
            <div className="block min-w-0">
              <CenterPage  userData={session?.user}/>
            </div>
            <div className="lg:block hidden min-w-0 box-border">
              <RightSide />
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
