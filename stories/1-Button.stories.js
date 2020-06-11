import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Lists } from '../components/icons'
import TextTitle from '../components/text-title'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const NavButton = () => (
  <NavigationButton selected={false} notify={12}>
    <Lists />
    <TextTitle>Lists</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
