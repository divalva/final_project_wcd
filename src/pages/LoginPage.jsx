import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./LoginPage.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const result = login(username, password);
    if (result.success) {
      navigate("/articles");
    } else {
      setError(result.message);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-icon">✦</span>
            <span className="logo-text">KELOMPOK 3</span>
          </div>
          <h1 className="login-title">Selamat Datang</h1>
          <p className="login-subtitle">
            Masuk untuk membaca & berbagi artikel
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                aria-label="Toggle show password"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">
            Masuk
          </button>
        </form>

        <div className="login-hints">
          <p className="hints-title">Akun Demo</p>
          <div className="hints-list">
            <div className="hint-item">
              <span className="hint-user">budi_santoso</span>
              <span className="hint-sep">/</span>
              <span className="hint-pass">budi123</span>
            </div>
            <div className="hint-item">
              <span className="hint-user">sari_dewi</span>
              <span className="hint-sep">/</span>
              <span className="hint-pass">sari456</span>
            </div>
            <div className="hint-item">
              <span className="hint-user">andi_pratama</span>
              <span className="hint-sep">/</span>
              <span className="hint-pass">andi789</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
