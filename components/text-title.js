import React from 'react'
import styles from './text-title.module.css'
import cn from 'classnames'

function TextTitle({ bold = true, children }) {
  return <h2 className={cn(styles.title, bold && styles.bold)}>{children}</h2>
}

export default TextTitle
