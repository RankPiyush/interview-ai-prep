import "../css/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-title">
        <h2>How PrepAI Works</h2>
        <p>Start your interview practice in just four simple steps.</p>
      </div>

      <div className="steps">
        <div className="step-card">
          <span>1</span>
          <h3>Create Account</h3>
          <p>Sign up and create your interview preparation profile.</p>
        </div>

        <div className="step-card">
          <span>2</span>
          <h3>Select Role</h3>
          <p>Choose your job role, experience level, and difficulty.</p>
        </div>

        <div className="step-card">
          <span>3</span>
          <h3>Practice Interview</h3>
          <p>Answer AI-generated technical, MCQ, and HR questions.</p>
        </div>

        <div className="step-card">
          <span>4</span>
          <h3>Get Feedback</h3>
          <p>Receive score, feedback, weak topics, and improvement tips.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;