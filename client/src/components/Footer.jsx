import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>🤖 PrepAI</h2>
        <p>Practice smarter. Crack interviews with confidence.</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </div>

      <div className="footer-contact">
        <h3>Contact</h3>

        <p>Email : support@prepai.com</p>
        <p>Phone : +91 9876543210</p>
      </div>

    </footer>
  );
}

export default Footer;