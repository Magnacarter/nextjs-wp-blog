// grab the first 20 Jeff posts
export const JEFF_POSTS = `query JeffPosts {
  posts(first: 20, where: {categoryName: "Jeff"}) {
    nodes {
      date
      excerpt
      id
      slug
      title
    }
  }
}
`

// get all the slugs for static paths / static generation
export const GET_ALL_POSTS_BY_SLUG = `{
	posts(first: 1000) {
		nodes {
			slug
		}
	}
}
`

// post by a slug, so we can display this to the user
export const POST_BY_SLUG = `
query PostBySlug($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    date
    content
    id
    slug
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}
`