import { useNavigate } from "react-router-dom";
import "./item.css";

const Item = ({ id, name, age, job, handleDelete }) => {
  const history = useNavigate();

  return (
    <>
      <tr className="item__container">
        <td>{name}</td>
        <td>{age}</td>
        <td>{job}</td>

        <td className="item__container-actions">
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => history("/edit-user", { state: { id: id } })}>
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default Item;
