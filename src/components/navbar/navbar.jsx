import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoWhite } from "../../assets/imports";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export const Items = () => {
  return (
    <>
      <a href="#home">Home</a>
      <a href="#plans">Pricing</a>
      <a href="#community">Use Cases</a>
      <a href="#integration">Location</a>
      <a href="#options">FAQ</a>
      <a href="#partnership">Company</a>
    </>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar__container">
      <img src={LogoWhite} alt="logo" />
      <div className="navbar__container-links">
        <Items />
      </div>
      {/* <button className="navbar__container-button">Dashboard</button> */}
      <Link to={"/dashboard"} className="navbar__container-button">
        Dashboard
      </Link>
      <div className="navbar__container-menu">
        <p
          className="navbar__container-menu__button"
          onClick={() => setNav((prev) => !prev)}
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </p>
        {nav && (
          <div className="navbar__container-menu__container scale-up-center">
            <Items />
            <Link
              to={"/dashboard"}
              className="navbar__container-menu__container-button"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
