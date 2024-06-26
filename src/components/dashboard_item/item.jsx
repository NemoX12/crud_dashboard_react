import { useNavigate } from "react-router-dom";
import "./item.css";

const Item = ({ id, idx, name, age, job, handleDelete }) => {
  const history = useNavigate();
  // console.log(id);

  return (
    <>
      <tr className="item_container">
        <td>{idx}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{job}</td>

        <td className="item_container-actions">
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
