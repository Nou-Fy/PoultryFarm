import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", flexDirection: "row", gap: "10px" }}> 
      <NavLink to="/" end>
        Dashboard
      </NavLink>
      <NavLink to="/insert">Insert</NavLink>
    </nav>
  );
}
