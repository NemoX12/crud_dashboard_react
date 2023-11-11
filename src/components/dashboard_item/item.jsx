import "./item.css";

const Item = ({ name, age, job }) => {
  return (
    <>
      <tr className="item__container">
        <td>{name}</td>
        <td>{age}</td>
        <td>{job}</td>
      </tr>
    </>
  );
};

export default Item;
