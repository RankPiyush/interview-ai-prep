import "../css/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-title">
        <h2>What Learners Say</h2>
        <p>Students are improving their interview confidence with PrepAI.</p>
      </div>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"PrepAI helped me practice React interview questions daily."</p>
          <h4>Rahul Sharma</h4>
          <span>Frontend Developer</span>
        </div>

        <div className="testimonial-card">
          <p>"The AI feedback showed me my weak topics clearly."</p>
          <h4>Priya Patel</h4>
          <span>MERN Student</span>
        </div>

        <div className="testimonial-card">
          <p>"MCQ and HR practice made my preparation much easier."</p>
          <h4>Amit Verma</h4>
          <span>Job Seeker</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;