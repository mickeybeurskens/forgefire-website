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
  return (
    <Card>
    <Card.Img src="/logo_forge_fire.svg" alt="blog image" height="200" width="200"/>  
    <Card.Body>
      <Card.Title>{blog.front_matter.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card&apos;s content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Read</Button>
    </Card.Footer>
    </Card>
  )
}

const BlogOverview = ({posts}) => {
  console.log(posts)
  const numberOfBlogs = 3
  const publishedBlogs = posts.filter(blogsPublished)
  const sortedBlogs = publishedBlogs.sort(blogsSortByDate).slice(0, numberOfBlogs)
  return (
    <div>
      <CardGroup className="p-4">
        {sortedBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog}/>          
        ))}
      </CardGroup>
    </div>
  )
}

export default BlogOverview