import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // User array to store registered users
  const [currentUser, setCurrentUser] = useState({}); // Track the currently logged-in user

  const registerUser = (userData) => {
    const exists = users.some((user) => user.username === userData.username);
    if (!exists) {
      setUsers([...users, userData]);
      console.log("User registered:", userData);
      return { registration : true }
    } else {
      console.log("User already exists!");
      return { registration : false }
    }
  };

  const loginUser = (loginData) => {
    const user = users.find(
      (user) =>
        user.username === loginData.username && user.password === loginData.password
    );
    if (user) {
      setCurrentUser(user);
      return { loggedIN : true }
    } else {
      return { loggedIN : false }
    }
  };

  const logoutUser = () => {
    console.log("User logged out:", currentUser);
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, currentUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider}