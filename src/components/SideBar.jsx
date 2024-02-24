import { PencilSimpleLine } from 'phosphor-react'

import styles from './SideBar.module.css'

export function SideBar(props) {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={props.cover}
        alt={`${props.name} Profile Cover`}
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src={props.image}
          alt={`${props.name} Profile Picture`}
        />

        <strong>{props.name}</strong>
        <span>{props.role}</span>
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
