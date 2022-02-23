import React from 'react'
import loadPosts from '../lib/post'
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
      blogs: loadPosts()
    },
  }
}

export default Home
export {getStaticProps}
