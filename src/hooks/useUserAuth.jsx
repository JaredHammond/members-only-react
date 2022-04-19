import { useState, createContext, useContext } from 'react';

// Creating our user auth context
export const UserAuthContext = createContext(null);

export const UserAuthProvider = ( {children} ) => {

  // Stores user object if user logged in, null if not logged in
  const [user, setUser ] = useState(null);

  async function loginUser({username, password}) {
    let response = await fetch(`${process.env.REACT_APP_API_URI}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    let data = await response.json();
    if (data.code !== 200) {
      return data.messages
    }
    updateUser(data.user);
    localStorage.setItem('token', data.token);
    return;
  }

  const updateUser = (user) => {
    let membership_level;

    if (user.is_admin) {
      membership_level = 'Admin';
    } else if (user.is_member) {
      membership_level = 'Member';
    } else {
      membership_level = 'Non-Member'
    }

    setUser({...user, membership_level});
    localStorage.setItem('user', JSON.stringify({...user, membership_level}));
  }

  async function logoutUser() {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return (
    <UserAuthContext.Provider value={{
      user,
      loginUser,
      logoutUser,
      updateUser
    }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext)