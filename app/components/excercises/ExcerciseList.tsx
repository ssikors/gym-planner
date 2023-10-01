
async function Excercises() {


  return (
    <ul>

    </ul>
  );
}

export const ExcerciseList = () => {

  return <div className="text-white">
    {/* @ts-expect-error Server Component */}
    <Excercises />
  </div>;
};
