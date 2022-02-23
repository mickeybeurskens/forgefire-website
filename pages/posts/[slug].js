import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAllPosts } from '../../lib/post'

const Post = ({post}) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>

    </>
  )
}

const getStaticProps = async (context) => {
  return {
    props: {

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