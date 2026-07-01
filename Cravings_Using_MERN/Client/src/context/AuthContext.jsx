import React, { use, useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  // Custom Hooks
  useEffect(() => {
    //     if (user) {
    //       setIsLogin(true);
    //     } else {
    //       setIsLogin(false);
    //     }
    //   }, [user]);

    setIsLogin(!!user); // Short form of if-else
  }, [user]);

  // Kaun kaunsa data share krna h who yha aayega
  const values = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext); // Ban gya custom hook and khi bhi use kr skte h

export const useAuth = () => useContext(AuthContext);
