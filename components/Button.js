import styles from '../styles/button.module.scss'


const PrimaryButton = ({text}) => {
  return (
    <>
      <button className={styles.primary}>
        {text}
      </button>
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
