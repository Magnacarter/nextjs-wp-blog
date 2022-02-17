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
}`;

// get all the slugs for static paths / static generation 

// post by a slug, so we can display this to the user