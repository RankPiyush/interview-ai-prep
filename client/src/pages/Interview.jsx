import "../css/Interview.css";

function Interview() {
  return (
    <div className="interview-page">

      <div className="interview-card">

        <div className="top-section">
          <h2>React Theory Questions</h2>

          <button className="close-btn">Close</button>
        </div>

        <div className="progress">
          <p>Question 1 of 10</p>
        </div>

        <div className="question">
          <h3>What is Virtual DOM?</h3>
        </div>

        <div className="answer">
          <textarea
            placeholder="Write your answer here..."
          ></textarea>
        </div>

        <div className="btn">
          <button>Next Question</button>
        </div>

      </div>

    </div>
  );
}

export default Interview;