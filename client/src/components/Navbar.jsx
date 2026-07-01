import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🤖 PrepAI</h2>
      </div>

      <ul className="nav-links">
        <Link to="/" >Home</Link>
         <Link to="features" >Features</Link>
         <Link to="/about" >About</Link>
      </ul>

      <div className="auth-btn">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
           <button className="register-btn">Register</button>
        </Link>
       
      </div>
    </nav>
  );
}

export default Navbar;