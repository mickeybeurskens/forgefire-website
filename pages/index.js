import React from 'react'
import loadBlogs from '../utils/blog'
import Hero from '../components/home/Hero'
import BlogOverview from '../components/home/BlogOverview'
import ServiceOverview from '../components/home/ServiceOverview'
import Testimonials from '../components/home/Testimonials'

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <BlogOverview blogs={props.blogs}/>
      <ServiceOverview/>
      <Testimonials/>
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
