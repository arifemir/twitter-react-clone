import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Lists } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>save full</ThemeButton>
    <ThemeButton full big>
      save big button
    </ThemeButton>
  </Stack>
)
export const NavButton = () => (
  <NavigationButton selected={false} notify={12}>
    <Lists />
    <TextTitle>Lists</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedKey="home" />
