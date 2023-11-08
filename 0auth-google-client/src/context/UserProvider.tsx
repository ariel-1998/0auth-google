import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { UserModel } from "../models/UserModel";
import axios from "axios";

type UserContextProps = {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
} | null;

const UserContext = createContext<UserContextProps>(null);

export const useUser = () => {
  const context = useContext<UserContextProps>(UserContext);
  if (!context) {
    throw new Error("userContext can only be used insede UserProvider!");
  }
  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/auth/login/success`;
      const { data } = await axios.get<UserModel>(url, {
        withCredentials: true,
      });
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
