import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo2.png'

const Navbar = () => {
  const setClass = ({ isActive }) => (isActive ? "active" : "inactive");


  return (

    <div className="navbar">
      <div className="logoPosicion">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <NavLink className={setClass} to="/home">
        Home
      </NavLink>

      <NavLink className={setClass} to="/pokemones">
        Pokemones
      </NavLink>
    </div>
  );

};
export default Navbar;
