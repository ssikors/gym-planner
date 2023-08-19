import { ReactNode } from "react";

type Props = {
  title: String
};



export const HeaderNav: React.FC<Props> = ({title}) => {
  return <>
    <div className="flex flex-row items-center text-white justify-between w-full h-12 bg-[#202020] fixed shadow-indigo-900 shadow-md">
      <div className="mx-6 font-light text-2xl">
        {title}
      </div>
      <div className="mx-4 text-gray-500">
        Settings
      </div>
    </div>
  </>
};