import { NavLink } from "react-router-dom";

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/">home</NavLink>
    </li>
    <li>
      <NavLink to="/confession">confession</NavLink>
    </li>
    <li>
      <NavLink to="/misdeanour">misdemeanour</NavLink>
    </li>
  </ul>
);

export default Nav;
