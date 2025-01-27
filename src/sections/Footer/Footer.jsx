import styles from "../Footer/FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>	&#169; Neo Rankapole 
            <br/>
            All Rights Reserved
        </p>
    </section>
  )
}

export default Footer