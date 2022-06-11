import Divider from '../Divider'
import { PrimaryButton } from '../Button'
import styles from '../../styles/home/hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.home_hero + " d-flex text-center flex-column"}>
      {/* <Image className="d-block mx-auto" src="/logo_forge_fire.svg" alt="" width="72" height="72"/> */}
      <h1 className={styles.header}>Forge Fire</h1>
      <h2 className={styles.subheader}>Artificial Intelligence Engineering</h2>
      <div className="col-lg-6 mx-auto p-1">
        <div className={styles.summary}>
          <p className={styles.text}>Model Training</p>
          <p className={styles.text}>Software Implementation</p>
          <p className={styles.text}>Business Case Analysis</p>
        </div>
        <div className="d-grid gap-3 p-4 d-sm-flex justify-content-sm-center">
          <PrimaryButton text={"Projects"} url="/#projects"/>
          <PrimaryButton text={"About Forge Fire"} url="/#about"/>
        </div>
      </div>
      <Divider/>
      <div className={styles.feature + " feature_text"}>
        <p>
          Forge Fire helps customers <span> identify valuable opportunities </span> and <span> solve problems </span> using <span>Artificial Intelligence</span>! 
          We <span> design, build and test AI software </span> from prototype to production for your application, and help you set up a <span>process to integrate AI</span> into your business.
        </p> 
        <p> 
          Forge Fire applies AI in a variety of fields including <span>Machine Vision and Predictive Maintenance</span>. We're always open for a challenge, applying AI to <span>your specific use case</span>.
          Browse some of our <span>projects</span> to see what Forge Fire does!
        </p>
      </div>
    </div>
  )
}

export default Hero