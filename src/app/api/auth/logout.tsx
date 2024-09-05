import {useEffect} from "react";
import { signOut, signIn } from "next-auth/react";

const Logout = () => {
    useEffect(() => {
        signOut({
            callbackUrl: "/"
        });
    }, []);

    return <p>Signing you out...</p>;
};

export default Logout;