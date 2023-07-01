import  ActiveLink  from './ActiveLink'

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

 const NavBar = () => {
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
export default NavBar