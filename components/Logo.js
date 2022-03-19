import Link from 'next/link'
import styles from '../styles/logo.module.scss'

const Logo = ({size}) => {
  return (
    <div className={styles.logo} style={{width: size, height: size}}>
      <Link href='/'><a>
        <img src='/logo_forge_fire.svg' 
          alt='forge fire logo' width={size} height={size}/>
      </a></Link>
    </div>
  )
}

export default Logo