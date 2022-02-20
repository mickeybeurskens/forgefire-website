import React from 'react'
import loadBlogs from '../utils/blog'
import styles from '../styles/Home.module.scss'

const Home = (props) => {
  console.log('home', props)
  return (
    <div>
      <p className={styles.red_text}>Hello Blog Home</p>
      <div className='posts'>
        {props.blogs.map((blog, index) => (
          <h3 key={index}>{blog.front_matter.title}</h3>
        ))}
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  return {
    props: {
      blogs: loadBlogs()
    },
  }
}

export default Home
export {getStaticProps}
