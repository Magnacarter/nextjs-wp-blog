import Link from 'next/link'
import Search from '../search/search'

export default function Nav({ navItems }) {
  console.log(navItems);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="#">
        <a className="navbar-brand">Navbar</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
{/*          {navItems.map(({ id, slug, title }) => (
            <li className="nav-item" key={id}>
              <Link href={slug}>
                <a className="nav-link">{title}</a>
              </Link>
            </li>
          ))}*/}
        </ul>
        <Search />
      </div>
    </nav>
  )
}
