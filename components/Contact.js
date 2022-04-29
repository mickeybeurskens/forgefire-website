import styles from "../styles/contact.module.scss"
import configs from "../lib/configs"

const Contact = () => {
  return (
    <div id="contact" className={styles.margin}>
      <h2 className={"center_h2 " + styles.title}>Contact Us!</h2>
      <div className="feature_text">
        <p className={styles.text}>
        Since <span>carrier pigeons</span> have been &quot;out of style&quot;
        for a while now, you can <span>reach us</span> through email.
        </p>
      </div>
      <a className={styles.email_link} href={"mailto:" + configs.email}>
        <p className={styles.email}>{configs.email}</p>
      </a>
    </div>
  )
}

export default Contact