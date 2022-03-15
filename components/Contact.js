import styles from "../styles/contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.margin}>
      <h2 className="center_h2">Contact Us!</h2>
      <div className="feature_text">
        <p>
        Since <span>carrier pigeons</span> have been &quot;out of style&quot;
        for a while now, you can <span>reach us</span> through email.
        </p>
      </div>
      <p className={styles.email}>info@forgefire.dev</p>
    </div>
  )
}

export default Contact