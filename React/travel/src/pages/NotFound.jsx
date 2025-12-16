import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <div className="alert alert-error">
        <span>404 - Page not found</span>
      </div>
      <Link className="btn" to="/">
        Back to Home
      </Link>
    </div>
  );
}
