import React from "react";
import PostOverview from "../components/PostOverview"
import { getAllPosts } from "../lib/post";

const Posts = ({posts}) => {
  return (
    <div>
      <PostOverview posts={posts} numberOfBlogs={-1}/>
    </div>
  )
}

const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'title', 'summary', 'img_path'])
  return {
    props: {
      posts: posts
    },
  }
}

export default Posts
export { getStaticProps }