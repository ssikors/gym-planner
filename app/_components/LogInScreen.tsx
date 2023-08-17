import { ReactNode } from "react";

type Props = {};

export const LogInScreen: React.FC<Props> = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="absolute top-1/3 flex flex-col gap-4 p-16 rounded-md items-center bg-[#202020] shadow-md ">
          <div>Login</div>
          <div className="flex flex-col gap-6 text-black">
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};
