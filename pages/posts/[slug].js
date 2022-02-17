import fetcher from '../lib/fetcher'
import { JEFF_POSTS } from '../lib/wordpress/api'
import Link from 'next/link'
import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ jeffPosts }) {
  return (
    <Layout>
      <Head>
        <title>{jeffPosts.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{jeffPosts.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={jeffPosts.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: jeffPosts.excerpt }} />
      </article>
    </Layout>
  )
}
