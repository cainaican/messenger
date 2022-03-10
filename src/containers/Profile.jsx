import React from "react";
import { useDispatch, useSelector } from "react-redux";

 const Profile = () => {
  const { name, age, site }= useSelector(state => state.profile)
  const dispatch = useDispatch()

  return(
    <div>
      <h1>Profile {name}</h1>
      <h1>Profile {age}</h1>
      <h1>Profile {site}</h1>
    </div>
  )
}

export default Profile