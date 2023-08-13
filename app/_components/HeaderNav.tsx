import { ReactNode } from "react";

type Props = {
  title: String
};



export const HeaderNav: React.FC<Props> = ({title}) => {
  return <>
    <div className="flex flex-row items-center text-white justify-between w-full h-12 bg-[#202020] fixed">
      <div className="mx-6 font-light text-xl">
        {title}
      </div>
      <div className="mx-4">
        Settings
      </div>
    </div>
  </>
};