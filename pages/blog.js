// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
// import Date from '../components/date'
// import fetcher from '../lib/fetcher'
// import { JEFF_POSTS } from '../lib/wordpress/api'

// export async function getStaticProps() {
//   // Add the "await" keyword like this:
//   const response = await fetcher(JEFF_POSTS)
//   const jeffPosts = response.data.posts.nodes
//   return {
//     props: {
//       jeffPosts
//     },
//     // Checks for new posts
//     revalidate: 1,
//   }
// }

// export default function Home({ jeffPosts }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Dev Dev Dev</p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {jeffPosts.map(({ id, slug, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <Link href={`/post/${slug}`}>
//                 <a>{title}</a>
//               </Link>
//               <br />
//               <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   )
// }