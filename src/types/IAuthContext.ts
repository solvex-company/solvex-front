import { User } from "./index";

export default interface IAuthContext {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
}
