import styles from "./ProfileStyles.module.css";
import profileImg from "../../assets/ProfilePhoto.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/NeoRankapole_CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Profile() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="profile" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.profile}
          src={profileImg}
          alt="Picture of Neo Rankapole"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Neo
          <br />
          Rankapole
        </h1>
        <h2>Bachelor of Computing Student</h2>
        
        <span>
          <a href="https://www.linkedin.com/in/neo-rankapole-b3148b256/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/neorankaps" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p>Specializing in Software Engineering. With a deep passion for software development and problem-solving.</p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Profile;
