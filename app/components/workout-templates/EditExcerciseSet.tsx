import { Excercise } from "@/app/admin-page/page";

type Props = {
  id: number;
  nOfSets: number;
  excerciseSelected: string;
  excercises: Excercise[];
  setSets: Function;
  setExcerciseSelected: Function;
  deleteExcercise: Function
};

export const EditExcerciseSet: React.FC<Props> = ({
  id,
  nOfSets,
  excerciseSelected,
  excercises,
  setSets,
  setExcerciseSelected,
  deleteExcercise
}) => {
  return (
    <div className="flex flex-row justify-between items-center text-center">
      <button onClick={(e)=>{
        e.preventDefault();
        deleteExcercise(id)}} className=" font-mono text-xl scale-150 hover:scale-[175%] mb-1 text-red-700 font-extrabold">
        x
      </button>
      <div className=" text-black mx-2">
        <select
          id="excercise"
          name="excercise"
          value={excerciseSelected}
          onChange={(e) => {
            e.preventDefault();
            setExcerciseSelected(e.target.value, id);
          }}
          required
          className="p-1"
        >
          {excercises.map((excercise) => {
            return (
              <option className="font-sans" value={excercise.name}>
                {excercise.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>x</div>
      <div className="flex flex-row item-center justify-center">
        <div className="text-black">
          <input
            id="sets"
            name="sets"
            type="number"
            value={nOfSets}
            onChange={(e) => {
              e.preventDefault();
              setSets(e.target.value, id);
            }}
            required
            className="ml-2"
          />
          <label htmlFor="sets" className="text-white ml-2">
            Sets
          </label>
        </div>
      </div>
    </div>
  );
};
