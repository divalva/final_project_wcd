import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <Link to="/articles" className="navbar-brand">
        <span className="navbar-logo-icon">✦</span>
        <span className="navbar-logo-text">Aksara</span>
      </Link>

      {currentUser && (
        <div className="navbar-right">
          <div className="navbar-user">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="navbar-avatar"
            />
            <span className="navbar-name">{currentUser.name}</span>
          </div>
          <button className="navbar-logout" onClick={handleLogout}>
            Keluar
          </button>
        </div>
      )}
    </nav>
  );
}
