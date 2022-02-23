import React from 'react'
import Hero from '../components/home/Hero'
import PostOverview from '../components/PostOverview'
import ServiceOverview from '../components/home/ServiceOverview'
import TestimonialsDots from '../components/home/TestimonialsDots'
import { getAllPosts } from '../lib/post'

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <PostOverview posts={props.posts} numberOfBlogs={3}/>
      <ServiceOverview/>
      <TestimonialsDots/>
    </main>
  )
  }

const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'title'])
  return {
    props: {
      posts: posts
    },
  }
}

export default Home
export {getStaticProps}
