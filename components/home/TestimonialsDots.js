import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"
import styles from "../../styles/home/TestimonialsDots.module.scss"


const Slide = () => {
  return (
  <div className={styles.slider__contents}><i className={styles.slider__image + " fa fa-codepen"}></i>
    <h2 className={styles.slider_caption}>codepen</h2>
    <p className={styles.slider__txt}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
  </div>
  )
}


const TestimonialsDots = () => {
  const testimonials = [
    {
      name: "Jake Joke",
      role: "Penmaker",
      img_path: '/logo_forge_fire.png',
      testimonial: 'This man is an awesome man capable of awesome thing.'
    },
    {
      name: "Tim Sorcerer",
      role: "Wizard",
      img_path: '/logo_forge_fire.png',
      testimonial: 'I am the mighty sorcerer Tim. Who the heck are you people?!'
    },
    {
      name: "Black Knight",
      role: "Knight",
      img_path: '/logo_forge_fire.png',
      testimonial: 'You shall not pass.'
    }
  ]

  return (
    <div className={styles.slider}>
      {testimonials.map((info, index) => (
        <input key={index} type="radio" name="slider"
          title={'slide' + String(index)} defaultChecked={index===0?true:false} 
          className={styles.slider__nav}/>
      ))}
      <div className={styles.slider__inner}>
        {testimonials.map((info, index) => (
          <Slide key={index}/>
        ))}
      </div>
    </div>
    )
}

export default TestimonialsDots