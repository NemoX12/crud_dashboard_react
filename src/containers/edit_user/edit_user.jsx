import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./edit_user.css";

const EditUser = () => {
  const location = useLocation();

  const [user, setUser] = useState();
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    age: "",
    job: "",
  });

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("users")));

    setUser((curr) => {
      const selectedUser = curr.filter((user) => user.id === location.state.id);

      return selectedUser[0];
    });
  }, []);

  const handleSubmit = (e) => {
    console.log({ ...user, ...editedUser });

    if (localStorage.getItem("users") !== null) {
      if (
        editedUser.name == "" ||
        editedUser.age == "" ||
        editedUser.job == ""
      ) {
        return;
      } else {
        let currentUsers = JSON.parse(localStorage.getItem("users"));

        currentUsers.push(editedUser);
        localStorage.setItem("users", JSON.stringify(currentUsers));
      }
    } else {
      return;
    }

    e.preventDefault();
  };

  return (
    <div className="edituser__container" onSubmit={handleSubmit}>
      <form className="edituser__container-form">
        <div className="edituser__container-form__inputs">
          <label htmlFor="name">Enter name...</label>
          <br />
          <input
            autoCapitalize="on"
            autoComplete="off"
            // value={user?.name || ""}
            type="text"
            id="name"
            onChange={(e) => {
              setEditedUser((curr) => ({ ...curr, name: e.target.value }));
            }}
          />

          <label htmlFor="age">Enter age...</label>
          <br />
          <input
            autoCapitalize="on"
            autoComplete="off"
            type="number"
            // value={user?.age || ""}
            id="age"
            onChange={(e) => {
              setEditedUser((curr) => ({ ...curr, age: e.target.value }));
            }}
          />

          <label htmlFor="job">Enter job name...</label>
          <br />

          <input
            autoCapitalize="on"
            // value={user?.job || ""}
            autoComplete="off"
            type="text"
            id="job"
            onChange={(e) => {
              setEditedUser((curr) => ({ ...curr, job: e.target.value }));
            }}
          />
        </div>

        <button type="submit">Edit User</button>
      </form>
    </div>
  );
};

export default EditUser;
