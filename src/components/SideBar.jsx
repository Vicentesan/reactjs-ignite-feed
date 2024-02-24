import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './SideBar.module.css'

export function SideBar(props) {
  console.log(props)

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={props.author.cover}
        alt={`${props.author.name} Profile Cover`}
      />

      <div className={styles.profile}>
        <Avatar author={props.author} />

        <strong>{props.author.name}</strong>
        <span>{props.author.role}</span>
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
