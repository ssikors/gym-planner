import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-white">
      
      <h1 className=" text-xl">Home</h1>
      <div>Your email: {session?.user?.email}</div>
    </div>
  );
}
