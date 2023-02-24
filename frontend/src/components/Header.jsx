import logo from "../assets/Vector.png"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = (props) => {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="harrypotter" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spells"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Spells
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="degrader"></div>
      <canvas id="canvas"> </canvas>
    </header>
  )
}
export default Header
