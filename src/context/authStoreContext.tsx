import RootStore from 'mobxStore';
import * as React from 'react';
import AuthService from 'services/authService';

export const AuthStoreContext = React.createContext<RootStore>({} as RootStore);

const authService = new AuthService();
const userStore = new RootStore();

export const AuthStoreProvider: React.FC = ({ children }) => {
  return (
    <AuthStoreContext.Provider value={userStore}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = () => {
  return React.useContext(AuthStoreContext);
};
