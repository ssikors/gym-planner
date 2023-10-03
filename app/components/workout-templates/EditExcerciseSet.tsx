import { Excercise } from "@/app/admin-page/page";

type Props = {
  id: number;
  nOfSets: number;
  excerciseSelected: string;
  excercises: Excercise[];
  setSets: Function;
};

export const EditExcerciseSet: React.FC<Props> = ({
  id,
  nOfSets,
  excerciseSelected,
  excercises,
  setSets,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div>{excerciseSelected}</div>
      <div>x</div>
      <div className="flex flex-row item-center justify-center">
        <label htmlFor="sets" className="">
          Sets
        </label>
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
        </div>
      </div>
    </div>
  );
};
