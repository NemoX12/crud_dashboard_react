import { useState, useEffect } from "react";
import { Item } from "../../components/imports";
import "./dashboard.css";

const Hero = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  return (
    <div className="dashboard__container">
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
                <Item name={elt.name} age={elt.age} job={elt.job} key={key} />
              );
            })
          ) : (
            <tr>
              <td>Empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Hero;
