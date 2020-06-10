import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Lists } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const NavButton = () => (
  <NavigationButton selected={false} notify={12}>
    <Lists />
    <TitleBold>Lists</TitleBold>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
