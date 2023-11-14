import { useState } from "react";
import { LogoWhite } from "../../assets/imports";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

const Items = () => {
  return (
    <>
      <a href="">Home</a>
      <a href="">Pricing</a>
      <a href="">Use Cases</a>
      <a href="">Location</a>
      <a href="">FAQ</a>
      <a href="">Company</a>
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
      <button className="navbar__container-button">Dashboard</button>
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
            <button className="navbar__container-menu__container-button">
              Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
