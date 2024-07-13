import { getCurrentUser } from '@/lib/appwrite';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Global {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: (val: boolean) => void;
  setIsLoading: (val: boolean) => void;
  user: any;
}
const GlobalContext = createContext({} as Global);

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    getCurrentUser()
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const globalValues = {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    user,
  };
  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
