import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'

function Button({ full = false, children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  )
}
export default Button
