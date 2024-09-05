
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn("github", {callbackUrl: "/"})}>Sign in with GitHub</button>
      <button onClick={() => signIn("discord", {callbackUrl: "/"})}>Sign in with Discord</button>
    </div>
  );
};

export default LoginPage;