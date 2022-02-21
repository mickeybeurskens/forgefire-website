import styles from "../../styles/home/ServiceOverview.module.scss"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"


const TestimonialCarousel = () => {
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
    <>
      <Carousel>
        {testimonials.map((info, index) => (
           <Carousel.Item key={index} className={styles.testimonial_size}>
           <Carousel.Caption>
             <h5>{info.name}</h5>
           </Carousel.Caption>
           <Image className="d-block" src={info.img_path} alt="photo" 
            width="60px" height="60px"/>
         </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}

const Testimonials = () => {
    return (
      <div className={styles.full_background}>
        <Container>
          <h2 className="pb-2">Testimonials</h2>
          <TestimonialCarousel/>
        </Container>
      </div>
    )
}

export default Testimonials