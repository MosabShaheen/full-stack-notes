import { SignUp } from "@clerk/nextjs";

export default function Page1() {
  return (
    <div className="container mx-auto min-h-screen grid place-content-center">
      <SignUp afterSignUpUrl={"/dashboard"} signInUrl="/sign-in" />
    </div>
  );
}

export const runtime = "experimental-edge";
export const revalidate = 0;
