/* eslint-disable */
import "./ShowingCard.css";
import React, { lazy, useEffect, useState } from "react";
import { getUsers } from "../../actions/UserAction";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../../api/UserRequest";
import {getAllUsers} from "../../api/UserRequest.js"
import UserCard from "../UserCard/UserCard";
// const UserCard = lazy(() => import("../UserCard/UserCard"));

function ShowingCard() {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const { users } = useSelector((state) => state.UserReducer);
  const [usrs, setUsrs] = useState(users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(getUsers());
      const arr = users?.filter((u) => {
        return user._id != u._id;
      });
      console.log('array => ' + arr );
      setUsrs(arr);
    };
    fetchUsers();
  }, []);

  return (
    <div className="following-card">
      {usrs && usrs.length >= 1 && <h3>اقتراحات</h3>}
      {usrs &&
        usrs.map((userCard, id) => (
          <UserCard user={userCard} key={userCard._id} />
        ))}
    </div>
  );
}
export default ShowingCard;
