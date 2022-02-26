import Image from "next/image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { PrimaryButton } from "./Button"
import styles from '../styles/PostOverview.module.scss'

const blogsPublished = (blog) => (
  new Date() - new Date(blog.date) > 0
)

const PostCard = ({blog}) => {
  return (
    <Col>
    <Card>
    <Card.Img src="/logo_forge_fire.svg" alt="blog image" height="200" width="200"/>  
    <Card.Body>
      <Card.Title><h4>{blog.title}</h4></Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card&apos;s content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <PrimaryButton className={styles.button} text={"Read"}/>
    </Card.Footer>
    </Card>
    </Col>
  )
}

const PostOverview = ({posts, numberOfBlogs}) => {
  const publishedBlogs = posts.filter(blogsPublished)
  let sortedBlogs = []
  if (numberOfBlogs > 0) { 
    sortedBlogs = publishedBlogs.slice(0, numberOfBlogs)
  } else {
    sortedBlogs = publishedBlogs
  }
  return (
    <div>
    <Row className="mb-5 p-4 g-3">
        {sortedBlogs.map((blog, index) => (
          <PostCard key={index} blog={blog}/>          
        ))}
      </Row>
    </div>
  )
}

export default PostOverview