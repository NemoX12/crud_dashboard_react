import { useState, useEffect } from "react";
import { Item } from "../../components/imports";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Hero = () => {
  const history = useNavigate();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  const handleDelete = (id) => {
    setUsers((curr) => {
      const updatedUsers = curr.filter((user) => user.id !== id);

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      return updatedUsers;
    });
  };

  return (
    <div className="dashboard__container">
      {users?.length > 0 ? (
        <table className="dashboard__container-table">
          <tbody>
            <tr className="dashboard__container-table__header">
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
            {typeof users !== "string" ? (
              users?.map((elt, key) => {
                return (
                  <Item
                    id={elt.id}
                    name={elt.name}
                    age={elt.age}
                    job={elt.job}
                    key={key}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <tr>
                <td>Empty</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <div className="empty">
          <p>Database is Empty...</p>
          <button onClick={() => history("/add-user")}>Add New User</button>
        </div>
      )}
    </div>
  );
};

export default Hero;
