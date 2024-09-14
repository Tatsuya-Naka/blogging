"use client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { trpc } from '~/server/utils/trpc';


type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType;
};

export default function Main({ userData }: Props) {
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
    const [title, setTitle] = useState("");
    const tags = "productive";
    // const [tags, setTags] = useState<string[]>([]);
    const [bgImageFile, setBgImageFile] = useState<File | null | undefined>(null);
    const [images, setImages] = useState<File[]>([]);
    const [description, setDescription] = useState("");
    const [bgImageURL, setBgImageURL] = useState("");

    const handleDialogOpen = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDialogOpen(true);
    };

    const deleteBgIdMutate = trpc.bg.delete.useMutation();
    const handleDialogClose = async () => {
        setIsDialogOpen(false);
        if (bgImageId) {
            try {
                const result = await deleteBgIdMutate.mutateAsync({
                    bgImageId: bgImageId,
                });

                console.log("Deleted bgimage Id: ", result);
            } catch (err) {
                console.log("Error occured during deleting bgImage Id: ", err);
            }
        }
        if (bgImageURL) {
            try {
                const url = await deleteMutate.mutateAsync({
                    bgimageId: bgImageId,
                });
                const response = await fetch(url, {
                    method: "DELETE",
                });

                if (!response.ok) {
                    console.log("Not success in delete background image");
                }

                console.log(response);
                console.log("Deleted URL: ", response.url);
            } catch (err) {
                console.log("Error occured during removing image: ", err);
            }
        }
        router.push("/home");
    };

    const handleImageSet = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setBgImageFile(e.currentTarget.files?.[0]);
    }

    const deleteMutate = trpc.demo.getPresignedURLForDelete.useMutation();

    const handleRemove = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // setBgImageFile(null);
        try {
            const url = await deleteMutate.mutateAsync({
                bgimageId: bgImageId,
            });
            const response = await fetch(url, {
                method: "DELETE",
            });

            if (!response.ok) {
                console.log("Not success in delete background image");
            }

            setBgImageURL("");

            console.log(response);
            console.log("Deleted URL: ", response.url);
        } catch (err) {
            console.log("Error occured during removing image: ", err);
        }
        setIsPhotoUploaded(false);
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const topicMutate = trpc.topic.create.useMutation();

    const uploadPost = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!bgImageFile) return;
        const topic = await topicMutate.mutateAsync({
            title: title,
            description: description,
            bgimageId: bgImageId,
            bgImageUrl: bgImageURL,
        });
        console.log("topic content: ", topic);
        const userId = userData?.id;
        const postId = topic.id;
        router.push(`/topic/${userId}/${postId}`);
    }

    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    // create background id and get presignedURL
    const demoMutation = trpc.demo.getPresigneURL.useMutation();
    // const { data: bgImages, refetch: refetchImage } = trpc.demo.getImage.useQuery();
    const [isFirstUpload, setIsFirstUpload] = useState(true);
    const [bgImageId, setBgImageId] = useState("");

    const createBgImageInfo = trpc.bg.create.useMutation();

    useEffect(() => {
        if (isFirstUpload) {
            const handleFirstBgAttempt = async () => {
                try {
                    const result = await createBgImageInfo.mutateAsync({
                        userId: userData?.id ?? ""
                    });
                    console.log("First Upload: ", result);
                    setBgImageId(result.id)
                }
                catch (err) {
                    console.log("Erro occured during the first upload of background image: ", err);
                }
            }
            void handleFirstBgAttempt();
        }
    }, [isFirstUpload]);

    useEffect(() => {
        setIsFirstUpload(false);
        console.log("BackgroundImage Id: ", bgImageId)
    }, [bgImageId])

    // get Presigned URl from AWS S3
    const { data: getUrl, refetch: refetchBg } = trpc.demo.getPresignedURLForShow.useQuery({
        bgimageId: bgImageId,
    });

    useEffect(() => {
        if (!bgImageFile) return;
        setIsPhotoUploaded(true);
        const uploadImage = async () => {
            try {
                // Presigned URL
                const url = await demoMutation.mutateAsync({
                    bgimageId: bgImageId,
                });
                console.log("URL: ", url);

                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': bgImageFile.type,
                    },
                    body: bgImageFile,
                });

                if (!response.ok) {
                    console.log("Uploading Error");
                }

                // console.log("Object URL: ", getUrl);
                console.log("Upload new image");
                setBgImageURL(getUrl ?? "");
                await refetchBg();

                console.log("Response: ", response);
            } catch (err) {
                console.error("Error uploading the image: ", err);
            }
        }
        void uploadImage();
        console.log("Upload...");
    }, [bgImageFile]);

    useEffect(() => {
        console.log("Object URL: ", bgImageURL);
    }, [bgImageURL]);

    // useEffect(() => {
    //     console.log("Object URL: ", getUrl);
    //     console.log("Upload new image");
    //     setBgImageURL(getUrl ?? "");
    //     refetchBg();
    // }, [getUrl, bgImageFile, isPhotoUploaded]);

    return (
        <main className="scroll-mt-[56px] block box-border bg-bg">
            <form className="md:grid grid-cols-[64px_7fr_3fr] max-w-[1380px] px-[1rem] h-[100vh] gap-x-[1rem] mx-auto text-[1rem] "
                onSubmit={uploadPost}
            >
                <div className="lg:col-start-1 md:col-span-2 lg:col-end-3 box-border md:p-0 flex items-center h-[56px] px-[0.5rem] ">
                    <span className="sm:mr-[1rem] mr-[0.25rem] md:block hidden ">
                        <a href="/home" className="lg:max-w-[200px] lg:text-[1.25rem] md:max-w-[175px] md:text-[1.125rem] md:font-[700] sm:max-w-[150px] inline-flex shrink-0 align-middle items-center text-[#090909] tracking-[-0.02em] leading-[1] ">
                            <img src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" className="h-[40px] aspect-[10/8] w-full h-[calc(56px-0.5rem*2)] object-contain inline-block " alt="DEV Community" />
                        </a>
                    </span>

                    <div className="flex flex-1 items-center text-engineBorderColor font-[500] ">
                        <span className="sm:inline-block hidden mr-2 ">Create Post</span>
                    </div>

                    <nav className="ml-auto sm:py-[0.5rem] border-[3px] p-[0.5rem] text-[1rem] flex border-none">
                        <ul className="flex p-0 w-full ">
                            <li className="w-full m-0 ">
                                <button
                                    className="border-none font-[500] text-engineBorderColor sm:w-suto sm:mx-[0.25rem] p-[0.5rem] inline-flex items-center text-[1rem] relative rounded-[0.375rem] "
                                >
                                    Edit
                                </button>
                            </li>
                            <li className="w-full m-0 ">
                                <button
                                    className="border-none font-[300] text-engineBorderColor sm:w-suto sm:mx-[0.25rem] p-[0.5rem] inline-flex items-center text-[1rem] relative rounded-[0.375rem] "
                                >
                                    Preview
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:absolute lg:right-[0.5rem] lg:top-[0.5rem] lg:ml-0 ml-[0.25rem] box-border " onClick={handleDialogOpen}>
                        <button className="p-[0.25rem] bg-transparent hover:bg-engineMarkBGHover text-editColor hover:text-createBorderHover relative inline-block rounded-[0.375rem] text-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="..."><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="rounded-customForCenterPage bg-white text-engineBorderColor shadow-custom-light-border lg:col-start-2 lg:col-end-2 md:col-span-2 overflow-y-auto h-[calc(100vh-144px)] flex flex-col box-border">
                    <div className="px-[4rem] py-[2rem] rounded-t-[0.375rem] rounded-b-none">
                        <div className="sm:flex-row flex sm:items-center sm:mb-[1.25rem] mb-[1rem] items-start flex-col ">
                            {isPhotoUploaded ?
                                <>
                                    <img
                                        src={bgImageURL}
                                        className="sm:mb-0 sm:mr-[1rem] w-[250px] h-[105px] rounded-[0.375rem] mb-[0.5rem]"
                                        style={{ objectFit: "scale-down", aspectRatio: "auto 250 / 105" }}
                                    />

                                    <div className="flex items-center">
                                        <label className="bg-transparent hover:bg-buttonHover border-[#d6d6d7] hover:border-[#a3a3a3] text-[#3d3d3d] hover:text-[#090909] py-1.5 px-3.5 rounded-[0.375rem] leading-[1.5rem] border-[2px] border-solid shadow-custom-light-border text-[1rem] relative inline-block  ">
                                            Change
                                            <input
                                                className="absolute left-[-10000px] top-auto w-[1px] h-[1px] leading-[1.5] " style={{ fontSize: "100%" }}
                                                onChange={handleImageSet} type="file"
                                            />
                                        </label>

                                        <button
                                            className="bg-transparent hover:bg-buttonHover text-removeText hover:text-removeHoverText border-0 py-1.5 px-3.5 rounded-[0.375rem] leading-[1.5rem] text-[1rem] font-[500] border-solid "
                                            onClick={handleRemove}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </>

                                :
                                <div className="flex items-center ">
                                    <label className="bg-transparent hover:bg-buttonHover border-[#d6d6d7] hover:border-[#a3a3a3] text-[#3d3d3d] hover:text-[#090909] border-[2px] py-1.5 px-3.5 rounded-[0.375rem] leading-[1.5rem] border-[2px] border-solid shadow-custom-light-border text-[1rem] relative inline-block ">
                                        Add a cover image
                                        <input className="absolute left-[-10000px] top-auto w-[1px] h-[1px] leading-[1.5] " style={{ fontSize: "100%" }}
                                            onChange={handleImageSet} type="file"
                                        >
                                        </input>
                                        {/* <span className="min-w-[190px] sm:text-[0.75rem] sm:px-[0.5rem] sm:py-[0.25rem] absolute bg-engineBorderColor text-white font-[400] leading-[1.25] px-[0.75rem] py-[0.5rem] z-[500] rounded-[0.375rem] w-auto opacity-1" style={{ left: "50%", top: "100%" }}>
                                                    Use a ratio of 1000:420 for best results.
                                                </span> */}
                                    </label>
                                </div>
                            }

                        </div>

                        {/* Title */}
                        <div className="mb-[0.5rem] relative box-border ">
                            <textarea
                                className="min-h-[60px] bprder-none resize-none outline-none w-full h-full max-h-[60px] whitespace-pre-wrap lg:text-[3rem] md:text-[2.25rem] sm:font-[800] font-[700] leading-[1.25] text-[1.875rem] bg-transparent p-0 m-0 w-full"
                                placeholder="New post title here..."
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className="relative box-border block ">
                            <div className="flex p-0 items-center ">
                                <ul className="m-0 p-0 w-full flex flex-wrap">
                                    <li className="order-1 self-center box-border ">
                                        <input
                                            className="text-engineBorderColor border-none leading-[1.5] "
                                            placeholder="Add up to 4 tags..."
                                            // onChange={handleTags} type="text"
                                            type="text"
                                        >
                                        </input>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="px-[4rem] pb-[2rem] flex flex-1 relative flex-col" style={{ borderRadius: "0 0 0.375rem 0.375rem" }}>
                        <div className="sticky top-0 bg-[#f9f9f9] py-[0.5rem] px-[4rem] shrink-0 mt-[calc(2rem*-1] mr-[calc(4rem*-1)] mb-[1.5rem] ml-[calc(4rem*-1)]    ">
                            <div className="md:ml-[calc(0.5rem*-1)] relative min-[480px]:relative flex ">
                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Bold
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Italic 
                                                    <span className="opacity-75 ">
                                                        CMD + I
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Link
                                                    <span className="opacity-75 ">
                                                        CMD + K
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Ordered list
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Unordered list
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Heading
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="align-bottom"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Quote
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="mr-1 p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="align-bottom"><path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Upload image
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>

                                <button
                                    className="ml-auto p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block rounded-[0.375rem] text-center "
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="align-bottom"><path fillRule="evenodd" clipRule="evenodd" d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path></svg>
                                    {/* <span className="absolute bg-engineBorderColor text-white text-[0.875rem] font-[400] leading-[1.25] z-[500] rounded-[0.375rem] w-full " style={{ left: "50%", top: "100%" }}>
                                                    Upload image
                                                    <span className="opacity-75 ">
                                                        CMD + B
                                                    </span>
                                                </span> */}
                                </button>
                            </div>
                        </div>

                        <div className="min-h-[27px] h-full block">
                            <textarea
                                className="min-h-[27px] resize-none outline-none border-none w-full h-full text-[1.125rem] bg-transparent w-full leading-[1.5] text-engineBorderColor"
                                placeholder="Write your post content here..."
                                onChange={handleDescription}
                            />
                        </div>
                    </div>
                </div>

                <div className="md:block hidden ">
                    <div className="sticky block top-[360px] ">
                        <div className="relative ">
                            <h4 className="text-[1.125rem] mb-2 box-border ">Edit Basics</h4>
                            <ul className="pl-[1.5rem] m-0 p-0 list-disc">
                                <li className="mb-[0.5rem] ">
                                    Use Markdown to write and format posts.
                                    <div className="text-[0.875rem] my-1">
                                        <p>Commonly used syntax</p>
                                    </div>
                                </li>
                                <li className="mb-[0.5rem] ">
                                    Use Markdown to write and format posts.
                                </li>
                                <li className="mb-[0.5rem] ">
                                    Use Markdown to write and format posts.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {isDialogOpen &&
                    <Dialog
                        open={isDialogOpen}
                        className="relative z-10"
                        onClose={() => setIsDialogOpen(false)}
                    >
                        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-60" />
                        <div className="fixed overflow-hidden inset-0 flex items-center justify-center left-0 right-0 top-0 bottom-0">
                            <DialogPanel className="sm:max-h-[201px] h-auto sm:w-[90%] h-full w-full max-w-[640px] grid grid-rows-[auto_1fr] bg-white sm:rounded-[0.75rem] border-none shadow-xl">
                                <DialogTitle className="py-[0.5rem] pr-[0.5rem] sm:pl-[2rem] pl-[1rem] border-b-[1px] border-b-solid border-b-engineMarkBG flex justify-between items-center">
                                    <h2 className="sm:text-[1.25rem] text-[1.1125rem] sm:leading-[1.5] font-[700] text-[#242424] leading-[1.25] mb-0">
                                        You have unsaved changes
                                    </h2>

                                    <button className="hover:bg-logInBg text-editColor hover:text-loginHover p-[0.5rem] bg-transparent rounded-[0.375rem] text-center "
                                        onClick={() => setIsDialogOpen(false)}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="..."><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
                                    </button>
                                </DialogTitle>

                                <div className="sm:p-[2rem] p-[0.75rem] max-h-full overflow-y-auto ">
                                    <p className="m-0">
                                        You have made changes to your post. Do you want to leave this page?
                                    </p>

                                    <div className="pt-4 ">
                                        <button
                                            className="mr-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
                                            onClick={handleDialogClose}
                                        >
                                            Yes, leave the page
                                        </button>
                                        <button
                                            className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300"
                                            onClick={() => setIsDialogOpen(false)}
                                        >
                                            No, keep editing
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </Dialog>
                }

                <div className="lg:col-start-2 md:col-span-2 lg:col-end-2 md:p-0 h-[88px] flex items-center relative ">
                    <button className="mr-2 bg-createAccountBG hover:bg-loginHover text-white hover:text-white font-[500] relative inline-block py-[0.5rem] px-[1rem] rounded-[0.375rem] text-center border-none"
                        type="submit"
                    >
                        Publish
                    </button>

                    <button className="mr-2 bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block py-[0.5rem] px-[1rem] rounded-[0.375rem] text-center border-none">
                        Save draft
                    </button>

                    <div className="sm:relative ">
                        <button className="p-[0.5rem] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block ounded-[0.375rem] text-center border-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="..."><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                        </button>
                    </div>

                    <button className="font-[400] bg-transparent hover:bg-logInBg text-editColor hover:text-loginHover relative inline-block py-[0.5rem] px-[1rem] rounded-[0.375rem] text-center border-none">
                        Revert new changes
                    </button>
                </div>
            </form>
        </main>
    )
}