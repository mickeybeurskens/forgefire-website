import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const loadBlogs = () => {
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
  return blogs
}

export default loadBlogs