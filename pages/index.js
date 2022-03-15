import React from 'react'
import Hero from '../components/home/Hero'
import ProjectHighlights from '../components/ProjectHighlights'
import About from '../components/About'
import Divider from '../components/Divider'
import { getAllPosts } from '../lib/post'
import Contact from '../components/Contact'

const Home = (props) => {
  return (
    <main>
      <Hero/>
      <ProjectHighlights posts={props.posts}/>
      <About/>
      <Divider/>
      <Contact/>
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
