import Link from 'next/link'
import styles from '../styles/button.module.scss'


const PrimaryButton = ({text, url}) => {
  return (
    <>
      <Link href={url} passHref><a>
        <button className={styles.primary}>
          {text}
        </button>
      </a></Link>
    </> 
  )
}

const SecondaryButton = ({text}) => {
  return (
    <>
      <button className={styles.secondary}>
        {text}
      </button>
    </>
  )
}

export {PrimaryButton, SecondaryButton}
