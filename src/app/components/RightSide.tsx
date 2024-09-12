import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export default async function RightSide() {
    const session = await getServerAuthSession();

    return (
        <div className="gird ">
            <section className="bg-white text-loginText shadow-custom-light-border rounded-[0.375rem] ">
                <div className="py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-bg">
                    <h3 className="sm:text-[1.25rem] sm:leading-[1.5] font-[700] text-[#242424] ">
                        <a href="#">#discuss</a>
                    </h3>
                    <div className="text-[0.75rem] text-[#5757575] ">Discussion threads targeting the whole community</div>
                </div>

                <div>
                    <a href="#" className="p-[1rem] block border-b-[1px] border-solid border-bg text-loginText ">
                        How do you raise funds for an open-source project?
                        <div className="text-[#717171] text-[0.875rem] pt-[0.25rem]">
                            6 comments
                        </div>
                    </a>
                </div>
                
            </section>

            <section className="bg-white text-loginText shadow-custom-light-border rounded-[0.375rem] mt-[1rem]">
                <div className="py-[0.75rem] px-[1rem] border-b-[1px] border-solid border-bg">
                    <h3 className="sm:text-[1.25rem] sm:leading-[1.5] font-[700] text-[#242424] ">
                        <a href="#">#watercooler</a>
                    </h3>
                    <div className="text-[0.75rem] text-[#5757575] ">Light, and off-topic conversation.</div>
                </div>

                <div>
                    <a href="#" className="p-[1rem] block border-b-[1px] border-solid border-bg text-loginText ">
                        Bad CSS-Dad jokes
                        <div className="text-[#717171] text-[0.875rem] pt-[0.25rem]">
                            1 comment
                        </div>
                    </a>
                </div>
            </section>


            <section className="relative overflow-hidden pt-0 px-[16px] pb-[16px] mt-[8px] mb-[16px] border-b-[1px] border-solid border-black ">
                <div className="relative text-[0.9em] font-bold pt-[8px] text-black ">
                    <h4>trending guide/resources</h4>
                </div>

                <div className="">
                    <div className="">
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        {/* <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            10 Things You Can Learn from Netflix Architecture
                        </a> */}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden pt-0 mt-[1rem] px-[16px] pb-[16px] mt-[8px] mb-[16px] border-b-[1px] border-solid border-black ">
                <div className="relative text-[0.9em] font-bold pt-[8px] text-black ">
                    <h4>recently required</h4>
                </div>

                <div className="">
                    <div className="">
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        {/* <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a>
                        <a href="#" className="block p-[1rem] border-b-[1px] border-solid border-bg">
                            Button Animation CSS
                        </a> */}
                    </div>
                </div>
            </section>

            <section>

            </section>
        </div>
    )
};