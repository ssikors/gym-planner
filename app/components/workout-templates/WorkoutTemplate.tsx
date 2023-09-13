
export type ExcerciseSets = {
  excerciseName:  string,
  numberOfSets: number,
  id: string
}

type Props = {
  title: string,
  excerciseList: ExcerciseSets[]
}

export const WorkoutTemplate: React.FC<Props> = ({title, excerciseList}) => {
  return <div className="flex flex-col bg-slate-800 w-72 sm:w-96 md:w-[34rem] my-4 rounded-sm shadow-md shadow-zinc-600 cursor-default hover:scale-105">
    <h1 className="w-full text-center text-lg border-2 ">{title}</h1>
    <div className="flex flex-col border-[1px] border-opacity-10 border-t-0">
      {excerciseList.map((excercise, index) => {return <div className="flex flex-row justify-between my-1 pl-2" key={excercise.id}>
        <h2 className=" font-semibold">{index + 1}. {excercise.excerciseName}</h2>
        <div className="mr-2">x {excercise.numberOfSets}</div>
      </div>})}
    </div>
  </div>
}