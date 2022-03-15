import React from 'react'
import Hero from '../components/home/Hero'
import { Swirl, InvSwirl } from '../components/Swirl'
import PostOverview from '../components/PostOverview'
import About from '../components/About'
import { getAllPosts } from '../lib/post'
import styles from "../styles/home.module.scss"

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <Swirl/>
      <div id="projects" className={styles.alt_bg}>
        <h2 className='center_h2'>Project Highlights</h2>
        <p></p>
        <PostOverview posts={props.posts} numberOfBlogs={3}/>
      </div>
      <InvSwirl/>
      <About/>
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
