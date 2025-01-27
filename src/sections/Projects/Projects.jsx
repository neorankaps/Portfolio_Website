import styles from "./ProjectStyles.module.css";
import myCalorieBuddy from "../../assets/MyCalorieBuddy_Logo.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={myCalorieBuddy}
          link={"https://github.com/neorankaps"}
          alt={"MyCalorieBuddy Logo"}
          h3={"MyCalorieBuddy"}
          p={"Calorie tracking app"}
        />
      </div>
    </section>
  );
}

export default Projects;
