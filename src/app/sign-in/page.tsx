import { SignIn } from "@clerk/nextjs";

export default function Page2() {
  return (
    <div className="container mx-auto min-h-screen grid place-content-center">
      <SignIn afterSignInUrl={"/dashboard"} signUpUrl="/sign-up" />
    </div>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
