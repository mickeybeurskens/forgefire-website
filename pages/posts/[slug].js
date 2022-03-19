import React from 'react'
import { useRouter } from 'next/router'
import { getAllPosts, getPostBySlug } from '../../lib/post'
import ReactMarkdown from 'react-markdown'

const Post = ({post}) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <p>{post.author} and {id} </p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </>
  )
}

const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
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