import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/user";

const Profile = () => {
  const dispatch = useDispatch();
  const payload = {
    name: "shivramyadav52@gmail.com",
  };
  useEffect(() => {
    dispatch(getUser(payload));
  }, []);

  useSelector((state) => {
    console.log(state.users);
  });
  return <div>Profile</div>;
};

export default Profile;
