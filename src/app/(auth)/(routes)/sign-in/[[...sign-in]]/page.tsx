import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-400 w-[100%]">
      <SignIn />
    </div>
  );
}
