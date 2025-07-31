import { IUser } from "./index";

export default interface IAuthContext {
  user: IUser | null;
  token: string | null;
  login: (user: IUser, token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setUser: (user: IUser | null) => void;
}
