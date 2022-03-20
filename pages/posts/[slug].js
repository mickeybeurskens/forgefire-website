import React from 'react'
import { useRouter } from 'next/router'
import { getAllPosts, getPostBySlug } from '../../lib/post'
import Contact from '../../components/Contact'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/posts.module.scss'
import Divider from '../../components/Divider'

const PostHero = ({img_path}) => {
  return (
      <div style={{backgroundImage: 'url(' + img_path + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 200}}/>
  )
}

const Post = ({post}) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      {/* <PostHero img_path={post.img_path}/> */}
      <div className={styles.posts}>
        <p>{post.author} and {id} </p>
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