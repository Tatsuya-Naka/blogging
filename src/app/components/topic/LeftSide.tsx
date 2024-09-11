import { getServerAuthSession } from "~/server/auth";

export default async function TopicLeft() {
    const session = await getServerAuthSession();

    return (
        <div className="block md:w-[4rem] box-border">
            <div className="md:rouded-[0.75rem] md:p-0 md:pb-0 md:bg-bg md:grid md:gap-[1.5rem] md:sticky md:border-none md:justify-stretch md:relative 
                md:top-[128px] md:z-1 fixed md:shadow-none shadow-topicShadow
                left-0 right-0 bottom-0 rounded-[0.375rem] bg-white p-[0.5rem] z-[50] rounded-t-[0.375rem]
            ">
                <div className="md:grid md:gap-[1rem] md:justify-stretch flex items-center">
                    <div className="md:flex md:flex-col border-none p-0 bg-transparent flex-row flex items-center ">
                        <button className="relative inline-flex md:flex-col text-[#3d3d3d] items-center leading-[1.5] m-0">
                            <span className="w-[40px] h-[40px] p-[0.5rem] ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true" className="w-[24px] h-[24px]">
                                    <g clip-path="url(#clip0_988_3276)">
                                        <path d="M19 14V17H22V19H18.999L19 22H17L16.999 19H14V17H17V14H19ZM20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.992L19.059 11.574C20.39 10.05 20.32 7.65998 18.827 6.16998C17.324 4.67098 14.907 4.60698 13.337 6.01698L12.002 7.21498L10.666 6.01798C9.09103 4.60598 6.67503 4.66798 5.17203 6.17198C3.68203 7.66198 3.60703 10.047 4.98003 11.623L13.412 20.069L12 21.485L3.52003 12.993C1.41603 10.637 1.49503 7.01898 3.75603 4.75698C6.02103 2.49298 9.64403 2.41698 12 4.52898C14.349 2.41998 17.979 2.48998 20.242 4.75698H20.243Z" fill="#525252"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_988_3276">
                                            <rect width="24" height="24" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className="md-:min-w-auto md:ml-0 md:block text-[#575757] inline-flex ml-[0.25rem] min-w-[1.5rem] ">
                                0
                            </span>
                        </button>
                    </div>

                    <button className="relative md:flex-col text-[#3d3d3d] border-none bg-transparent inline-flex flex-row items-center leading-[1.5] ">
                        <span className="p-[0.5rem] text-[#3d3d3d] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="...">
                                <path d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                            </svg>
                        </span>
                        <span className="md-:min-w-auto md:ml-0 md:block text-[#575757] inline-flex ml-[0.25rem] min-w-[1.5rem] ">
                            0
                        </span>
                    </button>

                    <button className="relative md:flex-col text-[#3d3d3d] border-none bg-transparent inline-flex flex-row items-center leading-[1.5] ">
                        <span className="p-[0.5rem] text-[#3d3d3d] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" className="...">
                                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                            </svg>
                        </span>
                        <span className="md-:min-w-auto md:ml-0 md:block text-[#575757] inline-flex ml-[0.25rem] min-w-[1.5rem] ">
                            0
                        </span>
                    </button>

                    <div className="md:relative text-center ">
                        <button className="rounded-[1000px] p-[0.5rem] bg-transparent hover:bg-buttonHover text-[#717171] hover:text-[#090909] text-[1rem] inline-block leading-[1.5rem] font-[500] pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a3ea97j2qvk2wr94bbe0zwq1vssy2mvt" aria-hidden="true" className=""><title id="a3ea97j2qvk2wr94bbe0zwq1vssy2mvt">More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};