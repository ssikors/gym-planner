import { LoginLogout } from "./LoginLogout"

type Props = {
  currentPage?: string
}

export const Header: React.FC<Props> = ({currentPage}) => {
  return <div className="text-white fixed flex justify-between items-center top-0 left-0 w-full h-24 bg-slate-800 border-y-4 border-y-teal-200">
    <div className="ml-4 text-xl font-semibold">{currentPage}</div>
    <div className="mr-4">
    <LoginLogout/>
    </div>

  </div>
}