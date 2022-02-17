import fetcher from '../../lib/fetcher'
import { GET_ALL_POSTS_BY_SLUG, POST_BY_SLUG } from '../../lib/wordpress/api'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'


export default function Post({ postData }) {
  const blogPost = postData.data.post;
  const router = useRouter;

  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage status={404} />
  }
  return (
      <Layout>
        <Head>
          <title>{blogPost.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{blogPost.title}</h1>
          <Image
            src={blogPost.featuredImage.node.mediaItemUrl}
            alt={blogPost.title}
            width={500}
            height={500}
          />
          <div className={utilStyles.lightText}>
            <Date dateString={blogPost.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </article>
      </Layout>
  )
}

export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_POSTS_BY_SLUG);
  const allPosts = await response.data.posts.nodes;
  return {
    paths: allPosts.map((post) => `/post/${post.slug}`) || [],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: 'SLUG'
  }
  const data = await fetcher(POST_BY_SLUG, { variables });
  return {
    props: {
      postData: data
    }
  }
}
