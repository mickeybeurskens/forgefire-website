import Link from "next/link"
import Card from "react-bootstrap/Card"
import styles from "../styles/featured_card.module.scss"

const FeaturedCard = ({title, img_path, text, slug, date}) => {
  return (
    <>
      <Link href={"/posts/" + slug} passHref>
        <a className={styles.link}>
          <Card className={styles.card}>
            <Card.Img className={styles.image_bg}
              src={img_path} alt="image" height="200" width="200"/>
            <Card.Body>
              <h4 className={styles.title}>{title}</h4>
              <div className={styles.divider}/>
            <h5 className={styles.date}>{date}</h5>
              <p className={styles.text}>{text}</p>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </>
  )
}

export default FeaturedCard