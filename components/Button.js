import styles from '../styles/Button.module.scss'


const PrimaryButton = ({text}) => {
  return (
    <>
      <button type="button" 
      className={styles.primary + " btn btn-primary btn-lg px-4 gap-3"}>
        {text}
      </button>
    </> 
  )
}

const SecondaryButton = ({text}) => {
  return (
    <>
      <button type="button" 
      className={styles.secondary + " btn btn-outline-secondary btn-lg px-4"}>
        {text}
      </button>
    </>
  )
}

export {PrimaryButton, SecondaryButton}
