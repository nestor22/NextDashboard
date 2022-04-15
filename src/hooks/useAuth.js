import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();
export function ProviderAuth({ childern }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>;{childern}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser('login');
  };

  return {
    user,
    signIn,
  };
}
