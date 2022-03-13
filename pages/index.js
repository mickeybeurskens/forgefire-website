import React from 'react'
import Hero from '../components/home/Hero'
import Swirl from '../components/Swirl'
import PostOverview from '../components/PostOverview'
import ServiceOverview from '../components/home/ServiceOverview'
import TestimonialsDots from '../components/home/TestimonialsDots'
import { getAllPosts } from '../lib/post'
import styles from "../styles/home.module.scss"

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <Swirl/>
      <div className={styles.alt_bg}>
        <PostOverview posts={props.posts} numberOfBlogs={3}/>
        {/* <TestimonialsDots/> */}
      </div>
    </main>
  )
  }

const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'title',
   'img_path', 'summary'])
  return {
    props: {
      posts: posts
    },
  }
}

export default Home
export {getStaticProps}
