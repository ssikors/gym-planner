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

  const deleteExcercise = (id: number) => {
    let excerciseSetsCopy = [...excerciseSets]
    for (let i = 0; i < excerciseSetsCopy.length; i++ ) {
      if (excerciseSetsCopy[i].key === id) {
        delete excerciseSetsCopy[i]
      }
    }

    setExcerciseSets(excerciseSetsCopy)
  }

  const setExcerciseSelected = (excercise: string, id: number) => {
    let excerciseSetsCopy = [...excerciseSets]
    let item
    for (let i = 0; i < excerciseSetsCopy.length; i++ ) {
      if (excerciseSetsCopy[i].key === id) {
        item = excerciseSetsCopy[i]
        if (item) {
          item.excerciseSelected = excercise
          excerciseSetsCopy[i] = item
          break
        }
      }
    }

    setExcerciseSets(excerciseSetsCopy)
  }

  const setSets = (sets: number, id: number) => {
    if (sets < 0) {
      return
    }
    let excerciseSetsCopy = [...excerciseSets]
    let item
    for (let i = 0; i < excerciseSetsCopy.length; i++ ) {
      if (excerciseSetsCopy[i].key === id) {
        item = excerciseSetsCopy[i]
        if (item) {
          item.nOfSets = sets
          excerciseSetsCopy[i] = item
          break
        }
      }
    }

    setExcerciseSets(excerciseSetsCopy)
    console.log(excerciseSets)
  }

  return (
    <div className="flex flex-col p-6 mt-6 bg-slate-800 border-2 border-teal-200">
      <h1 className="text-2xl">Add excercises to your template:</h1>
      <ol className="bg-slate-700 p-2 mt-6">
        {excerciseSets.map((excerciseSet) => {
          return (
            <li key={excerciseSet.key}>
              <EditExcerciseSet
                id={excerciseSet.key}
                nOfSets={excerciseSet.nOfSets}
                excerciseSelected={excerciseSet.excerciseSelected}
                excercises={excercises}
                setSets={setSets}
                setExcerciseSelected={setExcerciseSelected}
                deleteExcercise={deleteExcercise}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};
