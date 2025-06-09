import "/public/Education.css";
import nwu from "../assets/nwu.png";
import nhs from "../assets/nigel_high.jpg";

export default function Education() {
  return (
    <section className="education-section">
      <h1>Education</h1>
      <div className="education-content">
        <div className="education-card">
          <div className="school-logo">
            <img src={nwu} alt="NWU logo" />
          </div>
          <h3 className="school-title">BSc in IT</h3>
          <h3 className="school-name">North-West University</h3>
          <p className="dates">May 2024</p>
          <p className="school-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>
        <div className="education-card">
          <div className="school-logo">
            <img src={nhs} alt="NHS logo" />
          </div>
          <h3 className="school-title">National Senior Certificate</h3>
          <h3 className="school-name">Nigel High School</h3>
          <p className="dates">2016 - 2020</p>
          <p className="school-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
        </div>
      </div>
    </section>
  );
}
