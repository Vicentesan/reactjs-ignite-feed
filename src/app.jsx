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
          author={{
            name: 'Vicente Sanchez',
            role: 'Backend Developer',
            picture: 'https://github.com/Vicentesan.png',
            cover:
              'https://images.unsplash.com/photo-1707310042819-5d00accd7d81?q=50',
          }}
        />

        <main>
          <Post
            author={{
              name: 'Leslie Alexander',
              role: 'UI/UX Designer',
              picture:
                'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=50',
            }}
            publishedAt={new Date()}
          />
        </main>
      </div>
    </div>
  )
}
