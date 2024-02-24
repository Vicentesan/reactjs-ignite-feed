import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, author }) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      src={author.picture}
      alt={`${author.name} Profile Picture`}
    />
  )
}
