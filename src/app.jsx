import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'

import styles from './app.module.css'

import './global.css'

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

        <main>
          <Post
            author={{
              name: 'Leslie Alexander',
              role: 'UI/UX Designer',
              avatar:
                'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=50',
            }}
            publishedAt={new Date()}
          />
        </main>
      </div>
    </div>
  )
}
