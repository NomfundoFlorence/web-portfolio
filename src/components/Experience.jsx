import "/public/Experience.css";
import umuzi from '../assets/umuzi.png'

export default function Experience() {
  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <div className="experience-card">
        <div className="company-logo">
          <img src={umuzi} alt="Umuzi logo" />
        </div>
        {/* div for job-position & dates */}
        <h3 className="job-position">Web Dev Recruit</h3>
        <p className="dates">Apr 2024 - Mar 2025</p>
        <h3 className="company-name">Umuzi</h3>
        <p className="job-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
        <p className="technologies">
          <span className="technology">skill</span>
          <span className="technology">tool</span>
          <span className="technology">tech</span>
          <span className="technology">method</span>
        </p>
      </div>
    </section>
  );
}
