import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

import './global.css'
import styles from './app.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar
          image="https://github.com/Vicentesan.png"
          cover="https://images.unsplash.com/photo-1707310042819-5d00accd7d81?q=50"
          name="Vicente Sanchez"
          role="Backend Developer"
        />
      </div>
    </div>
  )
}
