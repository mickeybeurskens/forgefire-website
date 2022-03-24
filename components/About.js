// import Image from "next/image"
import styles from "../styles/about.module.scss"

const About = () => {
  return (
    <div id="about" className={styles.flex}>
      <div className={styles.image_col}>
        <img src='/images/profile.jpg' alt="profile picture"
          height={300} width={300} className={styles.profile}/>
      </div>
      <div className={styles.text_col}>
        <h2 className={"center_h2 " + styles.title}>Bringing You Forge Fire</h2>
        <div className="feature_text">
        <p className={styles.text}>
          Hi, I’m <span>Mickey Beurskens</span>, founder of Forge Fire. 
          I’ve been building software and have pursued it as a passion for many years, 
          and professionally started in 2019. I&apos;ve co-founded <a href="https://www.serpentine.ai" className="gradient_bg">Serpentine</a>, an <span> Artificial Intelligence Association </span> for students, 
          which I suggest checking out if you are interested at all in AI. I&apos;m also running <a className="gradient_bg">Tail HQ</a>, a coworking group located in Eindhoven, The Netherlands.
        </p>
        <p className={styles.text}>
          I treat <span>software as craft</span>, and I believe that craftsmen should produce products that they
          can <span>proudly present to their customers and patrons</span>. It is from that sense of pride and accomplishment 
          that Forge Fire got its name! 
        </p>
        <p className={styles.text}>
          If you are interested or have any questions at all, <span>contact us</span> for a chat or a cup of coffee!
        </p>
        </div>
      </div>
    </div>
  )
}

export default About