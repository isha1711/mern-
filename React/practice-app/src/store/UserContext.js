import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // User array to store registered users
  const [currentUser, setCurrentUser] = useState(null); // Track the currently logged-in user

  const registerUser = (userData) => {
    const exists = users.some((user) => user.username === userData.username);
    if (!exists) {
      setUsers([...users, userData]);
      console.log("User registered:", userData);
    } else {
      console.log("User already exists!");
    }
  };

  const loginUser = (loginData) => {
    const user = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    if (user) {
      setCurrentUser(user);
      console.log("User logged in:", user);
    } else {
      console.log("Invalid credentials!");
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