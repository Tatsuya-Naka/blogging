"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "~/server/utils/trpc";

type CustomType = {
    name?: string | null;    // Allow string, null, or undefined
    email?: string | null;   // Allow string, null, or undefined
    id: string;              // Keep this as string since it's required
    image?: string | null;   // Allow string, null, or undefined
};

interface Props {
    userData?: CustomType;
};

export default function EditProfile({ userData }: Props) {
    const router = useRouter();
    const { data: profile, refetch: refetchProfile } = trpc.profile.getProfileInfo.useQuery();
    const [name, setName] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [imageFile, setImageFile] = useState<File | null | undefined>(null);

    useEffect(() => {
        setName(profile?.name ?? "");
        setImage(profile?.image ?? "");
        setBio(profile?.bio ?? "");
        console.log("Data queried: ", profile);
        console.log("Name: ", profile?.name);
        console.log("Image: ", profile?.image);
        console.log("Bio: ", profile?.bio);
    }, [profile]);

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(((e.target as HTMLInputElement).value))
    };

    const handleChangeBio = (e: React.FormEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setBio(((e.target as HTMLTextAreaElement).value))
    };

    const mutation = trpc.profile.editProfile.useMutation();
    const [isUpdated, setIsUpdated] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await mutation.mutateAsync({
                name: name,
                image: image,
                bio: bio,
            });

            console.log("Result of Editting Profile: ", result);

            setIsUpdated(true);
        } catch (err) {
            console.log("Error occured durign editting profile: ", err);
        }
        setName("");
        setImage("");
        setBio("");
    };

    useEffect(() => {
        if (isUpdated) {
            router.push(`/profile/${userData?.id}`);
        }
    }, [isUpdated, router]);

    // get presigned URL
    const urlMutate = trpc.profile.getPresignedURL.useMutation();
    const {data: profileImageURL, refetch: refetchImage} = trpc.profile.setSignedURL.useQuery();

    const handleIconImage = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setImageFile(e.currentTarget.files?.[0]);
        // await refetchImage();
    };

    useEffect(() => {
        if (!imageFile) return;
        const putObjectIntoS3 = async () => {
            try {
                const url = await urlMutate.mutateAsync();
                // console.log("PresignedURL: ", url);

                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': imageFile.type,
                    },
                    body: imageFile,
                });

                if (!response.ok) {
                    console.log("Upload Error");
                }

                console.log("Upload new Image");
                setImage(profileImageURL ?? "");
                await refetchImage();
            }
            catch (err) {
                console.log("Error occured during uploading image into AWS S3 in profile setting: ", err);
            }
        }
        void putObjectIntoS3();
    }, [imageFile]);

    useEffect(() => {
        console.log("Refetch image");
    }, [imageFile]);


    return (
        <div className="col-start-1 col-span-2 md:gap-[1rem] md:grid-cols-[240px_1fr] max-w-[1024px] text-[1rem] w-full mx-auto my-0 grid md:p-[1rem] ">

            <div className="mt-3 ">
                <nav className="md:block hidden ">
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-white "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="agghx3lznjycsvhv5dspfbyk72fcwzp0" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="agghx3lznjycsvhv5dspfbyk72fcwzp0">Profile</title>
                            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fill="#FFCC4D"></path>
                            <path d="M7.842 15.123c.025.1.649 2.433 4.158 2.433 3.51 0 4.133-2.333 4.158-2.433a.277.277 0 00-.464-.265c-.011.01-1.086 1.03-3.695 1.03-2.607 0-3.683-1.02-3.692-1.03a.28.28 0 00-.452.087.278.278 0 00-.014.178zM10.056 9.5c0 1.074-.622 1.944-1.39 1.944-.767 0-1.388-.87-1.388-1.944 0-1.074.621-1.944 1.389-1.944.767 0 1.389.87 1.389 1.944zm6.666 0c0 1.074-.621 1.944-1.389 1.944-.767 0-1.389-.87-1.389-1.944 0-1.074.622-1.944 1.39-1.944.767 0 1.388.87 1.388 1.944z" fill="#664500"></path>
                        </svg>
                        Profile
                    </a>
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-transparent "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="arkdfcwvaz8pkxrf2ns1ljd1ufbfycdh" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="arkdfcwvaz8pkxrf2ns1ljd1ufbfycdh">Customization</title>
                            <path d="M12 16.444a4.444 4.444 0 110-8.889 4.444 4.444 0 010 8.89zm8.889-6.11H19.02a7.16 7.16 0 00-.879-2.12l1.322-1.32a1.112 1.112 0 000-1.572l-.786-.786a1.11 1.11 0 00-1.571 0l-1.321 1.322a7.167 7.167 0 00-2.12-.88V3.112A1.111 1.111 0 0012.557 2h-1.112a1.11 1.11 0 00-1.11 1.111V4.98a7.167 7.167 0 00-2.12.879l-1.32-1.322a1.111 1.111 0 00-1.572 0l-.786.786a1.112 1.112 0 000 1.571l1.322 1.321a7.172 7.172 0 00-.88 2.12H3.112A1.111 1.111 0 002 11.443v1.112a1.11 1.11 0 001.111 1.11H4.98c.18.76.48 1.473.879 2.119l-1.322 1.322a1.112 1.112 0 000 1.571l.786.786a1.113 1.113 0 001.571 0l1.321-1.322c.655.405 1.37.702 2.12.88v1.867A1.111 1.111 0 0011.443 22h1.112a1.111 1.111 0 001.11-1.111V19.02c.76-.18 1.473-.48 2.119-.879l1.322 1.322a1.108 1.108 0 001.571 0l.786-.786a1.111 1.111 0 000-1.571l-1.322-1.321a7.16 7.16 0 00.88-2.12h1.867A1.111 1.111 0 0022 12.557v-1.112a1.111 1.111 0 00-1.111-1.11z" fill="#66757F"></path>
                        </svg>
                        Customization
                    </a>
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-transparent "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="asxnpag6935dulwtk3xdbrh6mo0b6x3i" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="asxnpag6935dulwtk3xdbrh6mo0b6x3i">Notifications</title>
                            <path d="M14.222 20.333c0 1.228-4.444 1.228-4.444 0v-5.555a2.222 2.222 0 114.444 0v5.555z" fill="#C1694F"></path>
                            <path d="M16.444 3.667H7.556v11.11h13.333V8.112a4.444 4.444 0 00-4.445-4.444z" fill="#99AAB5"></path>
                            <path d="M7.556 3.667A4.444 4.444 0 003.11 8.11v6.667H12V8.11a4.445 4.445 0 00-4.444-4.444" fill="#292F33"></path>
                            <path d="M20.889 9.222h-6.667a1.111 1.111 0 000 2.222h4.445v1.112a1.11 1.11 0 001.11 1.11h1.112A1.111 1.111 0 0022 12.557v-2.223a1.111 1.111 0 00-1.111-1.11z" fill="#DD2E44"></path>
                        </svg>
                        Notifications
                    </a>
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-transparent "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="aqqhdqt5foqgtkykus5eypyo5t83djwl" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="aqqhdqt5foqgtkykus5eypyo5t83djwl">Account</title>
                            <path d="M14.728 9.999a9.75 9.75 0 00-1.6 1.345c-.07-2.358-.637-5.408-3.762-6.901-.618-3.364-7.83-1.655-7.183-1.329 1.285.65 1.97 2.305 2.796 3.175 1.474 1.552 3.113 1.647 3.928.433 1.927 1.252 2.054 3.627 1.995 6.166-.006.28-.013.542-.013.78v7.776c0 .614 2.223.614 2.223 0v-6.383c.3-.53 1.179-1.947 2.46-2.941.881.774 2.301.527 3.59-.83.829-.871 1.275-2.525 2.56-3.176.68-.342-7.11-2.218-6.993 1.885" fill="#77B255"></path>
                        </svg>
                        Account
                    </a>
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-transparent "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="ahw6afdk1fryidd9c7nssjy8rhkci50v" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="ahw6afdk1fryidd9c7nssjy8rhkci50v">Organization</title>
                            <path d="M20.889 9.222a1.111 1.111 0 01-1.111 1.111h-3.334a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 0116.443 7h3.334a1.11 1.11 0 011.11 1.111v1.111zm-12.222 0a1.111 1.111 0 01-1.111 1.111H4.222a1.111 1.111 0 01-1.11-1.11V8.11A1.111 1.111 0 014.221 7h3.334a1.111 1.111 0 011.11 1.111v1.111z" fill="#DAC8B1"></path>
                            <path d="M22 20.889A1.111 1.111 0 0120.889 22H3.11A1.111 1.111 0 012 20.889V9.222a1.111 1.111 0 011.111-1.11H20.89A1.111 1.111 0 0122 9.221V20.89z" fill="#F1DCC1"></path>
                            <path d="M14.222 7V5.889c0-.41-.224-.765-.555-.957v-.154a1.111 1.111 0 00-1.111-1.111h-1.112a1.11 1.11 0 00-1.11 1.11v.155a1.106 1.106 0 00-.556.957V7h-.556v15h5.556V7h-.556z" fill="#DAC8B1"></path>
                            <path d="M10.889 7H9.778V5.889h1.11V7zm2.222 0h1.111V5.889h-1.11V7zm-.555 0h-1.112V5.889h1.112V7z" fill="#55ACEE"></path>
                            <path d="M11.444 18.111h-1.11v-7.778h1.11v7.778zm2.223 0h-1.111v-7.778h1.11v7.778z" fill="#3B88C3"></path>
                            <path d="M16.444 18.111h-1.11v-6.667h1.11v6.667zm2.223 0h-1.111v-6.667h1.11v6.667zm2.222 0h-1.111v-6.667h1.11v6.667zm-16.667 0h-1.11v-6.667h1.11v6.667zm2.222 0h-1.11v-6.667h1.11v6.667zm2.223 0H7.556v-6.667h1.11v6.667zm-4.445 1.667h-1.11v-1.111h1.11v1.11zm2.222 0h-1.11v-1.111h1.11v1.11zm2.223 0H7.556v-1.111h1.11v1.11z" fill="#55ACEE"></path>
                            <path d="M11.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11z" fill="#3B88C3"></path>
                            <path d="M16.444 19.778h-1.11v-1.111h1.11v1.11zm2.223 0h-1.111v-1.111h1.11v1.11zm2.222 0h-1.111v-1.111h1.11v1.11z" fill="#55ACEE"></path>
                            <path d="M4.222 22h-1.11v-1.667h1.11V22zm2.222 0h-1.11v-1.667h1.11V22zm2.223 0H7.556v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm2.223 0h-1.111v-1.667h1.11V22zm2.777 0h-1.11v-1.667h1.11V22zm1.112 0h1.11v-1.667h-1.11V22zm3.333 0h-1.111v-1.667h1.11V22z" fill="#66757F"></path>
                        </svg>
                        Organization
                    </a>
                    <a href={`/setting/profile`}
                        className="sm:p-[0.5rem] flex items-center p-[0.75rem] rounded-[0.375rem] font-[500] text-[#090909] bg-transparent "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-labelledby="a18be1lg89bsc8xy057cpvo6oumypkw0" className="mr-[0.5rem] align-middle w-[1.5rem] h-[1.5rem] inline-flex items-center justify-center text-[1.25rem]"><title id="a18be1lg89bsc8xy057cpvo6oumypkw0">Extensions</title>
                            <path d="M7.556 22a.554.554 0 01-.494-.81l3.87-7.523h-6.71a.556.556 0 01-.363-.976L16.082 2.135a.555.555 0 01.857.675l-3.87 7.523h6.709a.556.556 0 01.363.976L7.919 21.865a.555.555 0 01-.363.135" fill="#FFAC33"></path>
                        </svg>
                        Extensions
                    </a>
                </nav>

                <div className="md:hidden block pt-0 p-2 ">
                    <select className="border-engineBorderForProfile leading-[1.5] py-[calc(0.5rem-1.5px)] px-[0.5rem] text-[1rem] w-full relative border-[1.5px] bg-white border-solid rounded-[0.375rem] ">
                        <option className="...">
                            Profile
                        </option>
                        <option className="...">
                            Customization
                        </option>
                        <option className="...">
                            Notifications
                        </option>
                        <option className="...">
                            Account
                        </option>
                        <option className="...">
                            Organization
                        </option>
                        <option className="...">
                            Extensions
                        </option>
                    </select>
                </div>
            </div>

            <div className="mt-3 min-w-0 ">
                <div className="md:p-0 p-[0.75rem] max-w-[1024px] my-0 mx-auto flex items-center justify-between ">
                    <h1 className="sm:text-[1.875rem] text-[#090909] text-[1.5rem] inline-flex min-h-[40px] items-center sm:leading-[1.5] font-[700] leading-[1.25] ">
                        <a href={`/profile/${userData?.id}`}
                            className="mb-4 text-createAccountBG"
                        >
                            @{userData?.id}
                        </a>
                    </h1>
                </div>

                <div className="block md:p-[1.5rem] md:mb-[1.5rem] rounded-[0.375rem] bg-white text-engineBorderColor shadow-custom-light-border p-[1rem] mb-[1rem] grid ">
                    <form className="flex w-full items-center">
                        <button
                            className="text-white bg-[#4267b2] items-center justify-center m-1 w-full pl-[0.75rem] border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-flex rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid  "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="as7jku1ybc14n9wya13mlvmsnodp94ih" className="text-white mr-[0.5rem] align-bottom "><title id="as7jku1ybc14n9wya13mlvmsnodp94ih">Facebook</title>
                                <path fill="white" d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                            </svg>
                            <p>Connect Facebook Account</p>
                        </button>
                    </form>
                    <form className="flex w-full items-center">
                        <button
                            className="text-white bg-black items-center justify-center m-1 w-full pl-[0.75rem] border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-flex rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid  "
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac0gnva35vdgxya1sxycldgweri0lii4" className="text-white mr-[0.5rem] align-bottom"><title id="ac0gnva35vdgxya1sxycldgweri0lii4">GitHub</title>
                                <path fill="white" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                            </svg>
                            <p>Connect GitHub Account</p>
                        </button>
                    </form>
                </div>

                <form className="..." onSubmit={handleSubmit}>
                    <div className="md:p-[1.5rem] md:mb-[1.5rem] md:gap-[1.5rem] p-[1rem] mb-[1rem] gap-[1rem] grid rounded-[0.375rem] bg-white text-engineBorderColor shadow-custom-light-border">
                        <h2 className="text-[1.5rem] font-bold">User</h2>
                        <div className="flex flex-col text-[1rem] ">
                            <label className="text-engineBorderColor font-[500] ">
                                Name
                            </label>

                            <input className="mt-[0.5rem] leading-[1.5] py-[calc(0.5rem-1.5px)] px-[0.5rem] text-[1rem] w-full resize-y border-[1.5px] bg-white border-solid border-borderColor text-engineBorderColor rounded-[0.375rem] "
                                value={name ?? ""}
                                onChange={handleNameChange}
                            />
                        </div>
                        {/* Icon Change */}
                        <div className="flex flex-col text-[1rem] ">
                            <label className="text-engineBorderColor font-[500] ">
                                Profile image
                            </label>
                            <div className="flex items-center mt-[0.5rem] ">
                                <span className="mr-2 w-[3rem] h-[3rem] inline-block rounded-full relative bg-leftBoxText overflow-hidden align-middle shrink-0">
                                    <Image
                                        src={image ?? ""}
                                        alt={image ?? ""}
                                        width={420}
                                        height={420}
                                        className="w-full h-full object-center overflow-hiddenr"
                                    />
                                </span>

                                <input
                                    className="flex p-3 w-full flex-1 items-center bg-white pointer text-loginText shadow-custom-light-border rounded-[0.375rem] leading-[1.5] "
                                    type="file"
                                    onChange={handleIconImage}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:p-[1.5rem] md:mb-[1.5rem] md:gap-[1.5rem] p-[1rem] mb-[1rem] gap-[1rem] grid rounded-[0.375rem] bg-white text-engineBorderColor shadow-custom-light-border">
                        <h2 className="text-[1.5rem] font-bold">Basic</h2>
                        <div className="flex flex-col text-[1rem] ">
                            <label className="text-engineBorderColor font-[500] ">
                                Bio
                            </label>

                            <textarea
                                className="mt-[0.5rem] leading-[1.5] py-[calc(0.5rem-1.5px)] px-[0.5rem] text-[1rem] w-full resize-y border-[1.5px] bg-white border-solid border-borderColor text-engineBorderColor rounded-[0.375rem]"
                                value={bio !== "404 bio not found" ? bio : ""}
                                placeholder="A short bio..."
                                onChange={handleChangeBio}
                            />

                            <p className="text-right mt-[0.5rem] text-leftBoxText font-[400] m-0 text-[0.875rem]">
                                <span>0</span>/200
                            </p>
                        </div>
                    </div>

                    <div className="md:p-[1.5rem] md:mb-[1.5rem] md:gap-[1.5rem] p-[1rem] mb-[1rem] gap-[1rem] grid rounded-[0.375rem] bg-white text-engineBorderColor shadow-custom-light-border">
                        <button
                            type="submit"
                            className="text-white bg-createAccountBG items-center justify-center m-1 w-full pl-[0.75rem] border-0 py-[0.5rem] px-[1rem] text-[1rem] relative inline-flex rounded-[0.375rem] text-[1rem] leading-[1.5rem] font-[500] text-center pointer border-solid  "
                        >
                            <p>Save Profile Information</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};