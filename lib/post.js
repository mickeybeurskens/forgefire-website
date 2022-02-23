import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = () => {
  return path.join('_posts')
}

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory())
}

const getPostBySlug = (slug, fields = []) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory(), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

const getAllPosts = (fields=[]) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export {
  getPostBySlug,
  getAllPosts
}