import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skillName="HTML5"/>
        <SkillList src={checkMarkIcon} skillName="CSS"/>
        <SkillList src={checkMarkIcon} skillName="JavaScript"/>
        <SkillList src={checkMarkIcon} skillName="C#"/>
        <SkillList src={checkMarkIcon} skillName="Delphi"/>
      </div>
      <hr/>
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skillName="Git"/>
        <SkillList src={checkMarkIcon} skillName="Bootstrap"/>
        <SkillList src={checkMarkIcon} skillName="NodeJS"/>
        <SkillList src={checkMarkIcon} skillName="React"/>
      </div>
    </section>
  );
}

export default Skills;
