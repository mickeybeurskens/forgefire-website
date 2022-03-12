import Card from "react-bootstrap/Card"
import styles from "../styles/featured_card.module.scss"

const FeaturedCard = ({title, img_path, text}) => {
  return (
    <>
      <Card className={styles.card}>
        <Card.Img className={styles.image_bg}
          src={img_path} alt="image" height="200" width="200"/>
        <Card.Body>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.divider}/>
          <p className={styles.text}>{text}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default FeaturedCard