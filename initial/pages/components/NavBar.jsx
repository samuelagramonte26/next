import React from 'react'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
  return (
    <nav>
        <ActiveLink text="Home" href="/"/>
        <ActiveLink text="About" href="/about"/>
        <ActiveLink text="Contact" href="/contact"/>
    </nav>
  )
}
