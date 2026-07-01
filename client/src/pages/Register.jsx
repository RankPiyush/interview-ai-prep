import { Link } from "react-router-dom";
import "../css/Login.css";

function Register() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Account </h2>
       <p>Create your account to start interview preparation.</p>

        <form className="login-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="button" className="login-submit">
            Register
          </button>
        </form>


        <p className="auth-text">
          Already have an account? <Link to="/login"><span>Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Register;