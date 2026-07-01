import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Crack Your Dream Job <br />
          with <span>PrepAI</span>
        </h1>

        <p>
          Practice real interviews with AI, receive instant feedback,
          improve your skills, and land your dream job with confidence.
        </p>

        <div className="hero-btn">
          <button className="start-btn">Start Interview</button>
          <button className="learn-btn">Learn More</button>
        </div>

      </div>

      <div className="hero-right">
        🤖
      </div>

    </section>
  );
}

export default Hero;