import { React, useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";

const ProfileComponent = () => {
  let { name } = useContext(ProfileContext);
  return <div>Profile Name : {name}</div>;
};

export default ProfileComponent;
