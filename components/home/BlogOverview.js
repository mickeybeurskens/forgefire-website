import Image from "next/image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardGroup from "react-bootstrap/CardGroup"

const blogsPublished = (blog) => (
  new Date() - new Date(blog.front_matter.date) > 0
)

const blogsSortByDate = (blog_first, blog_second) => (
  new Date(blog_second.front_matter.date) - new Date(blog_first.front_matter.date)
)

const BlogCard = ({blog}) => {
  console.log('card', blog)
  return (
    <Card style={{ width: '18rem' }}>
    <Image src="/logo_forge_fire.svg" alt="blog image" height="200" width="200"/>  
    <Card.Body>
      <Card.Title>{blog.front_matter.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card&apos;s content.
      </Card.Text>
      <Button variant="primary">Read</Button>
    </Card.Body>
  </Card>
  )
}

const BlogOverview = ({blogs}) => {
  const numberOfBlogs = 3
  const publishedBlogs = blogs.filter(blogsPublished)
  const sortedBlogs = publishedBlogs.sort(blogsSortByDate).slice(0, numberOfBlogs)
  return (
    <div>
      <CardGroup>
        {sortedBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog}/>          
        ))}
      </CardGroup>
    </div>
  )
}

export default BlogOverview