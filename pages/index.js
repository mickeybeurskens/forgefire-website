import React from 'react'
import loadBlogs from '../utils/blog'
import Hero from '../components/home/Hero'
import BlogOverview from '../components/home/BlogOverview'
import ServiceOverview from '../components/home/ServiceOverview'

const Home = (props) => {
  return (
    // <div>
    //   <p>Hello Blog Home</p>
    //   <div className='posts'>
    //     {props.blogs.map((blog, index) => (
    //       <h3 key={index}>{blog.front_matter.title}</h3>
    //     ))}
    //   </div>
    // </div>
    <main>
      <Hero/>
      <BlogOverview blogs={props.blogs}/>
      <ServiceOverview/>
    </main>
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
