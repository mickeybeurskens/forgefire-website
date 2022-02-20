import React from 'react'
import loadBlogs from '../utils/blog'
import styles from '../styles/Home.module.scss'
import Badge from 'react-bootstrap/Badge';

const Home = (props) => {
  console.log('home', props)
  return (
    <div>
      <p>Hello Blog Home</p>
      <Badge bg="secondary">BADGE!</Badge>
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
