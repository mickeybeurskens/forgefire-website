import React from 'react'
import { getAllPosts, getPostBySlug } from '../../lib/post'
import Contact from '../../components/Contact'
import Divider from '../../components/Divider'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/posts.module.scss'

const PostHero = ({img_path}) => {
  return (
      <div style={{backgroundImage: 'url(' + img_path + ')'}} 
        className={styles.post_hero}/>
  )
}

const Post = ({post}) => {
  return (
    <div>
      <PostHero img_path={post.img_path}/>
      <div className={styles.posts}>
        <div className={styles.metabg}>
          <p className={styles.metadata}>Written by {post.author} on {post.date} </p>
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <Divider/>
      <Contact/>
    </div>
  )
}

const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'img_path',
    'content'
  ])
return {
    props: {
      post: post
    }
  }
}

const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
export {getStaticProps, getStaticPaths}