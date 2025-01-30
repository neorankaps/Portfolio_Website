import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skillName="HTML5" />
        <SkillList src={checkMarkIcon} skillName="CSS" />
        <SkillList src={checkMarkIcon} skillName="JavaScript" />
        <SkillList src={checkMarkIcon} skillName="C#" />
        <SkillList src={checkMarkIcon} skillName="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skillName="React" />
        <SkillList src={checkMarkIcon} skillName="MySQL server" />
        <SkillList src={checkMarkIcon} skillName="Bootstrap 5" />
        
      </div>
    </section>
  );
}

export default Skills;
