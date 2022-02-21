import React from 'react'
import loadBlogs from '../utils/blog'
import styles from '../styles/Home.module.scss' 
import Image from 'next/image'

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
    <div className="px-4 py-5 my-5 text-center">
    <Image className="d-block mx-auto mb-4" src="/logo_forge_fire.svg" alt="" width="72" height="120"/>
    <h1 className="display-5 fw-bold">Centered hero</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
      </div>
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
