import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";

const ChangeProfileName = () => {
  let { name, handleChange } = useContext(ProfileContext);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

export default ChangeProfileName;
