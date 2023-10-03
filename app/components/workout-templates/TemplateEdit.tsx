import { Excercise } from "@/app/admin-page/page";
import { useState } from "react";
import { EditExcerciseSet } from "./EditExcerciseSet";

type Props = {
  excercises: Excercise[];
};

type ExcerciseSet = {
  key: number;
  nOfSets: number;
  excerciseSelected: string;
};

export const TemplateEdit: React.FC<Props> = ({ excercises }) => {
  const [excerciseSets, setExcerciseSets] = useState<ExcerciseSet[]>([
    { key: 1, nOfSets: 0, excerciseSelected: "" },
  ]);

  return (
    <div className="flex flex-col p-6 mt-6 bg-slate-800 border-2 border-teal-200">
      <h1 className="text-2xl">Add excercises to your template:</h1>
      <ol className="bg-slate-700 p-2 mt-6">
        {excerciseSets.map((excerciseSet) => {
          return (
            <li key={excerciseSet.key}>
              <EditExcerciseSet
                nOfSets={excerciseSet.nOfSets}
                excerciseSelected={excerciseSet.excerciseSelected}
                excercises={excercises}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
