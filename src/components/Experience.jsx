import "/public/Experience.css";
import experience from "../assets/experience.json";
// import umuzi from "../assets/umuzi.png";

export default function Experience() {
  const experiences = experience.map((xp, index) => {
    return (
      <div key={index} className="experience-card">
        <div className="company-logo">
          <img
            src={`/images/${xp.companyLogo}`}
            alt={`${xp.companyLogo} logo`}
          />
        </div>
        {/* div for job-position & dates */}
        <h3 className="job-position">{xp.jobPosition}</h3>
        <p className="dates">{xp.dates}</p>
        <h3 className="company-name">{xp.companyName}</h3>
        <p className="job-description">{xp.jobDescription}</p>
        <p className="technologies">
          {xp.skillsTools.map((skill, index) => {
            return (
              <span key={index} className="technology">
                {skill}
              </span>
            );
          })}
        </p>
      </div>
    );
  });

  return (
    <>
      <h1>Experience</h1>
      <section className="experience-section">{experiences}</section>
    </>
  );
}
