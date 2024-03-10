import { createContext, useState } from "react";

export const ProfileContext = createContext();

function ProfileProvider({ children }) {
  //Initializing State
  let [name, setName] = useState("hari");
  //Declaring handlers
  function handleChange(name) {
    setName(() => name);
  }
  //Return JSX
  return (
    <ProfileContext.Provider value={{ name, handleChange }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
