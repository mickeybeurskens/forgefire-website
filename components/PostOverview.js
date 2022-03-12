import Image from "next/image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FeaturedCard from "./FeaturedCard"
import { PrimaryButton } from "./Button"
import styles from '../styles/post_overview.module.scss'

const blogsPublished = (blog) => (
  new Date() - new Date(blog.date) > 0
)

const PostCard = ({blog}) => {
  return (
    <Col>
      <FeaturedCard title={blog.title} img_path="/logo_forge_fire.svg" text="Filler"/>
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