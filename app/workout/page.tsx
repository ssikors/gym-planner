import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { HeaderNav } from "../_components/HeaderNav";

export default async function WorkoutPage() {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <>
      <HeaderNav title={"Workout"}></HeaderNav>
      <div className="flex min-h-screen flex-col items-center p-24 text-white">
        <h1 className=" text-xl">Workout</h1>
      </div>
    </>
  );
}
