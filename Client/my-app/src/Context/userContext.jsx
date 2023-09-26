import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get('/profile')
        .then(({ data }) => {
          setUser(data);
          console.log(data)
        })
        .catch((error) => {
          console.error("Axios Error:", error);
        });      
    }
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
