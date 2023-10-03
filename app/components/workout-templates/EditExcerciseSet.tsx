import { Excercise } from "@/app/admin-page/page"

type Props = {
  nOfSets: number
  excerciseSelected: string
  excercises: Excercise[];
}

export const EditExcerciseSet: React.FC<Props> = ({nOfSets, excerciseSelected, excercises}) => {
  return <div className="flex flex-row justify-between">
    <div>{excerciseSelected}</div>
    <div>x</div>
    <div>{nOfSets} sets</div>
  </div>
}