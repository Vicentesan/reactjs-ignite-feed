import { ImgHTMLAttributes } from 'react'
import { Author } from '../app'

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
  author: Author
}

export function Avatar({ hasBorder = true, author, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      src={props.src || author.picture}
      alt={props.alt || `${author.name} Profile Picture`}
      title={props.title || author.name}
      {...props}
    />
  )
}
