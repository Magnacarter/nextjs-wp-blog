
export default function Search() {
  const searchBlog = async event => {
    event.preventDefault()
  }
  return (
    <form onSubmit={searchBlog} className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}