import "/public/Education.css";
import education from "../assets/education.json";

export default function Education() {
  const educationList = education.map((edu, index) => {
    return (
      <div className="education-card" key={index}>
        <div className="school-logo">
          <img src={`/images/${edu.logo}`} alt={`${edu.schoolName}'s logo`} />
        </div>
        <h3 className="school-title">{edu.title}</h3>
        <h3 className="school-name">{edu.schoolName}</h3>
        <p className="dates">{edu.dates}</p>
        <p className="school-description">{edu.description}</p>
      </div>
    );
  });

  return (
    <section className="education-section" id="education">
      <h1>Education</h1>
      <div className="education-content">{educationList}</div>
    </section>
  );
}
