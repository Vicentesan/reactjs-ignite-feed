import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './SideBar.module.css'
import { Author } from '../app'

export function SideBar({ author }: { author: Author }) {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={author.cover}
        alt={`${author.name} Profile Cover`}
      />

      <div className={styles.profile}>
        <Avatar author={author} />

        <strong>{author.name}</strong>
        <span>{author.role}</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
