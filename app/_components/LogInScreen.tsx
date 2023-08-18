import { ReactNode } from "react";
import { GoogleAuthButton } from "./auth-components/GoogleAuthButton";

type Props = {};

export const LogInScreen: React.FC<Props> = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="absolute top-1/3 w-fit flex flex-col gap-4 p-4 rounded-md items-center bg-[#202020] shadow-md ">
          {/* <div>Login</div>
          <div className="flex flex-col gap-6 text-black">
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password" />
          </div> */}

          <GoogleAuthButton />
        </div>
      </div>
    </>
  );
};
