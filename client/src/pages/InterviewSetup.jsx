import "../css/InterviewSetup.css";

function InterviewSetup() {
  return (
    <div className="setup-page">
      <div className="setup-card">
        <h1>Setup Your Interview</h1>
        <p>Choose your preferences before starting the interview.</p>

        <form className="setup-form">
          <label>Technology</label>
          <select>
            <option>Select Technology</option>
            <option>React</option>
            <option>JavaScript</option>
            <option>Core Java</option>
            <option>Node.js</option>
            <option>MongoDB</option>
            <option>MySQL</option>
            <option>MERN Stack</option>
            <option>HR Interview</option>
          </select>

          <label>Difficulty</label>
          <select>
            <option>Select Difficulty</option>
            <option>Easy</option>
            <option>Hard</option>
          </select>

          <label>Interview Type</label>
          <select>
            <option>Select Type</option>
            <option>Theory Questions</option>
            <option>MCQ</option>
            <option>HR</option>
          </select>

          <label>Number of Questions</label>
          <select>
            <option>5 Questions</option>
            <option>10 Questions</option>
            <option>15 Questions</option>
          </select>

          <button type="button">Start Interview</button>
        </form>
      </div>
    </div>
  );
}

export default InterviewSetup;