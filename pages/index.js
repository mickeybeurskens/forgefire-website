import React from 'react'
import loadBlogs from '../utils/blog'
import Hero from '../components/home/Hero'
import BlogOverview from '../components/home/BlogOverview'
import ServiceOverview from '../components/home/ServiceOverview'
import TestimonialsDots from '../components/home/TestimonialsDots'

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <BlogOverview blogs={props.blogs}/>
      <ServiceOverview/>
      <TestimonialsDots/>
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
