import { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BiSolidDashboard, BiSolidUser, BiLogoGithub } from "react-icons/bi";
import { Logo } from "../../assets/imports";
import "./sidebar.css";

const SideContext = createContext();

const Sidebar = () => {
  const [show, setShow] = useState(true);

  const toggleSidebar = () => {
    setShow((prev) => !prev);
  };

  return (
    <SideContext.Provider value={show}>
      <div className="sidebar__container">
        <div className={`sidebar__container-top ${show && "closedTop"}`}>
          <p onClick={toggleSidebar} className="sidebar__container-top-button">
            {show ? <HiChevronRight size={22} /> : <HiChevronLeft size={22} />}
          </p>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebar__container-bottom">
          <Item
            icon={<BiSolidDashboard size={22} />}
            text={"Dashboard"}
            path={"/dashboard"}
          />
          <Item
            icon={<BiSolidUser size={22} />}
            text={"Add User"}
            path={"/add-user"}
          />
          <Item
            icon={<BiLogoGithub size={22} />}
            text={"My Github"}
            path={"https://github.com/NemoX12"}
          />
        </div>
      </div>
    </SideContext.Provider>
  );
};

const Item = ({ text, icon, path }) => {
  const show = useContext(SideContext);

  return (
    <Link
      to={path}
      className={`sidebar__container-bottom__item ${show && `closedItem`}`}
    >
      {icon}
      {!show && <p>{text}</p>}
    </Link>
  );
};

export default Sidebar;
