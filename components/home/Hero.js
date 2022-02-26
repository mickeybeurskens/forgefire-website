import Image from 'next/image'
import { PrimaryButton, SecondaryButton } from '../Button'
import styles from '../../styles/home/Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.home_hero + " d-flex text-center p-3 flex-column"}>
    <Image className="d-block mx-auto" src="/logo_forge_fire.svg" alt="" width="72" height="72"/>
    <h1 className='p-2'>Centered hero</h1>
    <div className="col-lg-6 mx-auto p-1">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 p-4 d-sm-flex justify-content-sm-center">
        <PrimaryButton text={"Read Blogs"}/>
        <SecondaryButton text={"Consultancy"}/>
      </div>
    </div>
    </div>
  )
}

export default Hero