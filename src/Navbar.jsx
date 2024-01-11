import { NavLink } from "react-router-dom";
import "./index.css"

function Navigation() {
  return (
    <div className="container">
      <div className="navbar">
        <NavLink className={"navitem"} to={"/"}>Home</NavLink>
        <NavLink className={"navitem"} to={"/blue"}>Blue</NavLink>
        <NavLink className={"navitem"} to={"/red"}>Red</NavLink>
        <NavLink className={"navitem"} to={"/green"}>Green</NavLink>
        <NavLink className={"navitem"} to={"/purple"}>Purple</NavLink>
        <NavLink className={"navitem"} to={"/yellow"}>Yellow</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
