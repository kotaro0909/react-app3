import { useContext } from 'react';
import { LoginUserContext, LoginUserConTextType } from '../provider/LoginUserProvider';

export const useLoginUser = (): LoginUserConTextType => useContext(LoginUserContext);
