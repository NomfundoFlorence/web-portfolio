import "/public/Header.css";
import { useState } from "react";

export default function Header() {
  const [barVisibility, setBarVisibility] = useState(false);
  const toggleBarVisibility = () => {
    setBarVisibility(() => !barVisibility);

    if (barVisibility) {
      const navBarBigScreens = document.querySelector(".nav-bar-mobile");
      navBarBigScreens.style.display = "none";
    } else {
      const navBarBigScreens = document.querySelector(".nav-bar-mobile");
      navBarBigScreens.style.display = "flex";
    }
  };

  return (
    <>
      <header>
        <h1 className="logo-short">
          <a href="#top">N.F</a>
        </h1>
        <h1 className="logo-long">
          <a href="#top">N.F Mlangeni</a>
        </h1>

        <div className="nav-bar" onClick={toggleBarVisibility}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3-h"></div>
          <div className="bar4"></div>
        </div>

        <nav className="nav-bar-big-screens">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <nav className="nav-bar-mobile">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
