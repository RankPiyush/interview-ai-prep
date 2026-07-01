import "../css/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About PrepAI</h2>

        <p>
          PrepAI is an AI-powered interview preparation platform designed to
          help students and professionals improve their technical and HR
          interview skills through smart practice and instant feedback.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              Make interview preparation simple, smart, and accessible for
              everyone.
            </p>
          </div>

          <div className="about-card">
            <h3>🤖 AI Powered</h3>
            <p>
              Generate interview questions, evaluate answers, and provide
              detailed feedback using AI.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Career Growth</h3>
            <p>
              Practice regularly, build confidence, and perform better in real
              interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;