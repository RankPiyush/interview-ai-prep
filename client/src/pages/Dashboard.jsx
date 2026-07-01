import "../css/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome back, Piyush 👋</h1>
        <p>Track your progress and start a new AI interview.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Interviews</h3>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <h3>Average Score</h3>
          <h2>8.4/10</h2>
        </div>

        <div className="stat-card">
          <h3>Best Score</h3>
          <h2>9.2/10</h2>
        </div>
      </div>

      <div className="start-card">
        <h2>Start New Interview</h2>
        <p>Select your role and begin practicing with AI-generated questions.</p>
        <button>Start Interview</button>
      </div>

      <div className="recent-section">
        <h2>Recent Interviews</h2>

        <div className="recent-card">
          <span>React Developer</span>
          <span>Score: 8.5/10</span>
          <button>View</button>
        </div>

        <div className="recent-card">
          <span>Node.js Developer</span>
          <span>Score: 7.8/10</span>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;