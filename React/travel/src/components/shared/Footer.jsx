import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-6">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/">
          Home
        </Link>
        <Link className="link link-hover" to="/destinations">
          Destinations
        </Link>
        <Link className="link link-hover" to="/about">
          About
        </Link>
        <Link className="link link-hover" to="/contact">
          Contact
        </Link>
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} Travel Agency - Demo project</p>
      </aside>
    </footer>
  );
}
