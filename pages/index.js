import React from 'react'
import loadBlogs from '../utils/blog'

const Home = (props) => {
  console.log('home', props)
  return (
    <div>
      <p>Hello Blog Home</p>
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
