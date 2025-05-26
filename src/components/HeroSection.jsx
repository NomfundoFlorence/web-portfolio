import "/public/HeroSection.css";
import image from "../assets/image05.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img src={image} alt="image of Nomfundo smiling" />
      <h1 className="name">Nomfundo Mlangeni</h1>
      <h3 className="professional-title">Software Developer</h3>
      <div className="socials-container">
        <button className="github-button">
          <a href="#github">
            GitHub
          </a>
        </button>
        <button className="linkedIn-button">
          <a href="#linkedIn">LinkedIn</a>
        </button>
      </div>
    </section>
  );
}
