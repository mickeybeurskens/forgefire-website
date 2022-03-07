import Image from 'next/image'
import { PrimaryButton } from '../Button'
import styles from '../../styles/home/hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.home_hero + " d-flex text-center flex-column"}>
      {/* <Image className="d-block mx-auto" src="/logo_forge_fire.svg" alt="" width="72" height="72"/> */}
      <h1 className={styles.header}>Forge Fire</h1>
      <h2 className={styles.subheader}>Full Stack Software Engineering</h2>
      <div className="col-lg-6 mx-auto p-1">
        <div className={styles.summary}>
          <p className={styles.text}>Web Apps</p>
          <p className={styles.text}>Engineering Projects</p>
          <p className={styles.text}>In-House Software</p>
        </div>
        <div className="d-grid gap-3 p-4 d-sm-flex justify-content-sm-center">
          <PrimaryButton text={"Projects"}/>
          <PrimaryButton text={"Consultancy"}/>
        </div>
      </div>
      <div className={styles.line + " d-flex"}/>
      <div className={styles.feature_text}>
        <p>
          Forge Fire designs, builds and tests <span>software</span> for <span>web apps</span>,
          <span> engineering projects</span> and <span>in-house software</span>.
          Browse some <span>projects</span> or take a look at
          <span> customer testimonials</span> to see what Forge Fire does!
        </p>
      </div>
    </div>
  )
}

export default Hero