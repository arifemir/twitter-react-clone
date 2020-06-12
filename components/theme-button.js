import React from 'react'
import cn from 'classnames'
import styles from './theme-button.module.css'
import Button from './button'

function ThemeButton({ className, children, big = false, ...props }) {
  return (
    <Button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...props}
    >
      {children}
    </Button>
  )
}
export default ThemeButton
