import { NavLink } from "react-router-dom";

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      {/* added style object to navlink compoenent using isActive property */}
      <NavLink
        to="/misdemeanour"
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        Misdemeanour
      </NavLink>
    </li>
    <li>
      <NavLink to="/confession">Confess To Us</NavLink>
    </li>
  </ul>
);

export default Nav;
