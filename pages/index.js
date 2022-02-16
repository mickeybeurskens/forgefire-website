import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React from 'react'
import ReactMarkdown from 'react-markdown'

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
  const fileNames = fs.readdirSync(path.join('blogs'))
  const blogs = fileNames.map(filename => {
    const slug = filename.replace('.md', '')
    const content = fs.readFileSync(path.join('blogs', filename),
      'utf-8')
    const { data: front_matter } = matter(content)
    return {
      slug,
      front_matter
    }
  })

  return {
    props: {
      blogs
    },
  }
}

export default Home
export {getStaticProps}
