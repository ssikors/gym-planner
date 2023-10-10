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
  const [keyCounter, setKeyCounter] = useState<number>(1);
  const [templateName, setTemplateName] = useState<string>('')

  const getKey = () => {
    setKeyCounter((prevState) => {
      return prevState + 1;
    });
    return keyCounter;
  };
  // TODO there might be a better way

  const [excerciseSets, setExcerciseSets] = useState<ExcerciseSet[]>([]);

  const addExcercise = () => {
    setKeyCounter((prevState) => {
      return prevState + 1;
    });
    setExcerciseSets((prevState) => {
      if (excerciseSets[0]) {
        return [
          ...prevState,
          { key: getKey(), nOfSets: 0, excerciseSelected: "" },
        ];
      }
      return [{ key: getKey(), nOfSets: 0, excerciseSelected: "" }];
    });
    console.log(excerciseSets);
  };

  const deleteExcercise = (id: number) => {
    let excerciseSetsCopy: ExcerciseSet[] = [];
    for (let i = 0; i < excerciseSets.length; i++) {
      if (excerciseSets[i].key !== id) {
        excerciseSetsCopy.push(excerciseSets[i]);
      }
    }
    console.log(excerciseSetsCopy);

    setExcerciseSets(excerciseSetsCopy);
    console.log(excerciseSets);
  };

  const setExcerciseSelected = (excercise: string, id: number) => {
    let excerciseSetsCopy = [...excerciseSets];
    let item;
    for (let i = 0; i < excerciseSetsCopy.length; i++) {
      if (excerciseSetsCopy[i].key === id) {
        item = excerciseSetsCopy[i];
        if (item) {
          item.excerciseSelected = excercise;
          excerciseSetsCopy[i] = item;
          break;
        }
      }
    }

    setExcerciseSets(excerciseSetsCopy);
  };

  const setSets = (sets: number, id: number) => {
    if (sets < 0) {
      return;
    }
    let excerciseSetsCopy = [...excerciseSets];
    let item;
    for (let i = 0; i < excerciseSetsCopy.length; i++) {
      if (excerciseSetsCopy[i].key === id) {
        item = excerciseSetsCopy[i];
        if (item) {
          item.nOfSets = sets;
          excerciseSetsCopy[i] = item;
          break;
        }
      }
    }

    setExcerciseSets(excerciseSetsCopy);
    console.log(excerciseSets);
  };

  return (
    <div className=" flex flex-col items-center p-6 mt-6 bg-slate-800 border-2 border-teal-200">
      <h1 className="text-2xl">Name your template:</h1>
      <div className="flex flex-col w-full items-center bg-slate-700 p-2 mt-6">
        <input
          id="template-name"
          name="template-name"
          type="text"
          className="w-full text-center h-8 text-xl bg-slate-600"
          value={templateName}
          onChange={(e) => {
            e.preventDefault()
            setTemplateName(e.target.value)
          }}
        />
      </div>
      <h1 className="text-2xl">Add excercises to your template:</h1>
      <div className="flex flex-col items-center bg-slate-700 p-2 mt-6">
        <ol className="">
          {excerciseSets[0]
            ? excerciseSets.map((excerciseSet) => {
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
              })
            : ""}
        </ol>
        <button
          onClick={addExcercise}
          className="hover:cursor-pointer w-72 my-4  px-8 py-2 bg-teal-900 ring-2 ring-teal-300 shadow-md hover:scale-105 hover:opacity-60"
        >
          Add a new excercise
        </button>
        {templateName && excerciseSets.length ? <button className="hover:cursor-pointer w-72 my-4  px-8 py-2 bg-teal-900 ring-2 ring-teal-300 shadow-md hover:scale-105 hover:opacity-60">
          Save Template
        </button> : ''}

      </div>
    </div>
  );
};
