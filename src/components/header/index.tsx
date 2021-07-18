import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const isActive = (link: String) => router.asPath === link

  const links = [
    {
      name: 'home',
      href: '/'
    },
    {
      name: 'about',
      href: '/about'
    },
    {
      name: 'contact',
      href: '/contact'
    }
  ]

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="header__menu">
            {links.map(({ name, href }) => (
              <li className={isActive(href) ? 'active' : ''} key={href}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
