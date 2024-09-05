import { useEffect } from "react";
import { signIn } from "next-auth/react";

const ReLogin = () => {
    // useEffect(() => {
    //     signIn("github");
    // }, []);

    return <p>Redirecting you to sign in...</p>;
};

export default ReLogin;