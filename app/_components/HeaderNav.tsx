import { ReactNode } from "react";

type Props = {
  children: ReactNode
};



export const HeaderNav: React.FC<Props> = ({ children }) => {
  return <>
    <div className="w-full h-24 bg-indigo-950 fixed"></div>
    {children}
  </> 
};