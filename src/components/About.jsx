import "/public/About.css";
import aboutImage from "../../public/images/image73.jpg";

export default function About() {
  const skillsArr = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "Git",
    "Github",
  ];

  const skills = skillsArr.map((skill, index) => {
    return (
      <span className="skill" key={index}>
        {skill}
      </span>
    );
  });

  return (
    <section className="about-section" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image-container">
          <img src={aboutImage} alt="A picture of Nomfundo smiling" />
        </div>
        <div className="about-text-skills-container">
          <p>
            I'm a BSc in IT graduate and an Umuzi alumni with a passion for
            turning ideas into code. My background includes experience in
            multiple programming languages, with a primary focus on the core web
            development technologies. I'm eager to contribute to innovative
            projects, grow as a developer, and make my mark in the ever-evolving
            world of tech, one line of code at a time.
          </p>
          <div className="skills-container">
            <h3>skills</h3>
            <div className="skills">{skills}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
