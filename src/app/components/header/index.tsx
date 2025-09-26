"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  const isActive = (link: string) => pathname === link

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
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
