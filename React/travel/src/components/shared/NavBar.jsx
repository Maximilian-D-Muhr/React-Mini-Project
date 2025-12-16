import { NavLink, Link } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `btn btn-ghost btn-sm ${isActive ? "bg-base-200" : ""}`;

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-lg">
            Travel Agency
          </Link>
        </div>

        <div className="flex-none gap-2">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/destinations" className={linkClass}>
            Destinations
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
