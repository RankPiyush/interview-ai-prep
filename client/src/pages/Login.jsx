import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to continue your interview preparation.</p>

        <form className="login-form">
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />

          <button type="button" className="login-submit" onClick={()=> navigate("/dashboard")}>
            Login
          </button>
        </form>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="auth-text">
          Don't have an account?<Link to="/register"> <span>Register</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;