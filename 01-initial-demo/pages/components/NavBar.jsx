import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav>
      {
        menuItems.map(({text,href})=>(
          <ActiveLink text={text} href={href}  key={text}/>
        ))
      }
    </nav>
  )
}
