import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./edit_user.css";

const EditUser = () => {
  const location = useLocation();
  const history = useNavigate();

  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    age: "",
    job: "",
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    setUser(users);

    const selectedUser = users.find((user) => user.id === location.state.id);
    setEditedUser(selectedUser);
  }, [location.state.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editedUser.name || !editedUser.age || !editedUser.job) {
      return;
    }

    const updatedUsers = user.map((u) =>
      u.id === editedUser.id ? editedUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Redirect or navigate to another page after submission
    history("/"); // Replace "/" with the desired path

    // Alternatively, you can use the following to go back to the previous page:
    // history.goBack();
  };

  return (
    <div className="edituser__container">
      <form className="edituser__container-form" onSubmit={handleSubmit}>
        <div className="edituser__container-form__inputs">
          <label htmlFor="name">Enter name...</label>
          <br />
          <input
            autoCapitalize="on"
            autoComplete="off"
            value={editedUser.name || ""}
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
            value={editedUser.age || ""}
            type="number"
            id="age"
            onChange={(e) => {
              setEditedUser((curr) => ({ ...curr, age: e.target.value }));
            }}
          />

          <label htmlFor="job">Enter job name...</label>
          <br />

          <input
            autoCapitalize="on"
            value={editedUser.job || ""}
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
