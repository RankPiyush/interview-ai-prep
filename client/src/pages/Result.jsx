import "../css/Result.css";

function Result() {
  return (
    <div className="result-page">
      <div className="result-card">
        <h1>Interview Completed 🎉</h1>
        <p>Your performance summary is ready.</p>

        <div className="score-box">
          <h2>8.4 / 10</h2>
          <span>Overall Score</span>
        </div>

        <div className="result-stats">
          <div>
            <h3>10</h3>
            <p>Total Questions</p>
          </div>

          <div>
            <h3>8</h3>
            <p>Good Answers</p>
          </div>

          <div>
            <h3>2</h3>
            <p>Need Improve</p>
          </div>
        </div>

        <div className="feedback-box">
          <h2>AI Feedback</h2>
          <p>
            You have good basic understanding. Improve your explanation with
            examples, real-world use cases, and clear technical keywords.
          </p>
        </div>

        <div className="result-actions">
          <button>Go Dashboard</button>
          <button className="outline-btn">Start Again</button>
        </div>
      </div>
    </div>
  );
}

export default Result;