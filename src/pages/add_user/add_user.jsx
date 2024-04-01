import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import "./add_user.css";

const AddUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    job: "",
  });

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newId = v4().slice(0, 8);
    let newUser = { ...user, id: newId };

    if (localStorage.getItem("users") !== null) {
      if (user.name == "" || user.age == "" || user.job == "") {
        return;
      } else {
        let currentUsers = JSON.parse(localStorage.getItem("users"));

        currentUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(currentUsers));
      }
    } else {
      localStorage.setItem("users", JSON.stringify([newUser]));
    }

    setUser((curr) => ({
      ...curr,
      id: "",
      name: "",
      age: "",
      job: "",
    }));

    history("/dashboard");
  };

  return (
    <div className="adduser__container">
      <form onSubmit={handleSubmit} className="adduser__container-form">
        <div className="adduser__container-form__inputs">
          <label htmlFor="name">Enter name...</label>
          <input
            autoCapitalize="on"
            autoComplete="off"
            type="text"
            id="name"
            value={user.name}
            onChange={(e) =>
              setUser((user) => ({ ...user, name: e.target.value }))
            }
          />

          <label htmlFor="age">Enter age...</label>
          <input
            autoCapitalize="on"
            autoComplete="off"
            type="number"
            id="age"
            value={user.age}
            onChange={(e) =>
              setUser((user) => ({ ...user, age: e.target.value }))
            }
          />

          <label htmlFor="job">Enter job name...</label>
          <input
            autoCapitalize="on"
            autoComplete="off"
            type="text"
            id="job"
            value={user.job}
            onChange={(e) =>
              setUser((user) => ({ ...user, job: e.target.value }))
            }
          />
        </div>

        <button type="submit" className="submit-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
