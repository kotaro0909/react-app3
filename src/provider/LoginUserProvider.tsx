import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { User } from '../types/user';

type LoginUser = User & { isAdmin: boolean };

export type LoginUserConTextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserConTextType>({} as LoginUserConTextType);

export const LoginUserProivder = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
