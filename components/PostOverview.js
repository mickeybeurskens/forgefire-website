import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FeaturedCard from "./FeaturedCard"
import styles from "../styles/post_overview.module.scss"

const blogsPublished = (blog) => (
  new Date() - new Date(blog.date) > 0
)

const PostCard = ({blog}) => {
  return (
    <FeaturedCard title={blog.title} img_path={blog.img_path} 
      text={blog.summary} stub={blog.slug}/> 
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
    <div className={styles.overview}>
        {sortedBlogs.map((blog, index) => (
          <PostCard key={index} blog={blog}/>          
        ))}
    </div>
  )
}

export default PostOverview