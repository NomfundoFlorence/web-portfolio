import "/public/HeroSection.css";
import image from "../assets/image05.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img src={image} alt="image of Nomfundo smiling" />
      <h1 className="name">Nomfundo Mlangeni</h1>
      <h3 className="professional-title">Web Developer</h3>
      <div className="socials-container">
        <button className="github-button">
          <a href="https://github.com/NomfundoFlorence" target="blank">
            GitHub
          </a>
        </button>
        <button className="linkedIn-button">
          <a href="https://www.linkedin.com/in/nomfundo-mlangeni05/" target="blank">LinkedIn</a>
        </button>
      </div>
    </section>
  );
}
