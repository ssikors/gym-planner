
import prisma from "@/server/db/client";


async function Excercises() {
  const excercises = await prisma.excercise.findMany();

  return (
    <ul>
      {excercises.map((excercise) => (
        <li key={excercise.id}>{excercise.name}</li>
      ))}
    </ul>
  );
}

export const ExcerciseList = () => {

  return <div className="text-white">
    {/* @ts-expect-error Server Component */}
    <Excercises />
  </div>;
};
