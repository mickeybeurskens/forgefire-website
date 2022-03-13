import Image from "next/image"
import styles from "../../styles/home/testimonials_dots.module.scss"


const Slide = ({info}) => {
  return (
  <div className={styles.slider__contents}>
    <Image src={info.img_path} width={60} height={60} alt={info.company}/>
    <h2 className={styles.slider_caption}>{info.name}</h2>
    <p className={styles.slider__txt}>{info.testimonial}</p>
    <p>{info.role}</p>
    <p>{info.company}</p>
  </div>
  )
}


const TestimonialsDots = () => {
  const testimonials = [
    {
      name: "Jake Joke",
      role: "Penmaker",
      company: "Penmakers Co",
      img_path: '/logo_forge_fire.png',
      testimonial: 'This man is an awesome man capable of awesome thing.'
    },
    {
      name: "Tim Sorcerer",
      role: "Wizard",
      company: "Sorcery Inc",
      img_path: '/logo_forge_fire.png',
      testimonial: 'I am the mighty sorcerer Tim. Who the heck are you people?!'
    },
    {
      name: "Black Knight",
      role: "Knight",
      company: "Freelance Knight",
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
      <div className={styles.slider__inner} style={{width: testimonials.length + '00%'}}>
        {testimonials.map((info, index) => (
          <Slide key={index} info={info}/>
        ))}
      </div>
    </div>
    )
}

export default TestimonialsDots