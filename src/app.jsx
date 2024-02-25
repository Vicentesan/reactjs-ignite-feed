import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post } from './components/Post'
import { faker } from '@faker-js/faker'

import styles from './app.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      picture: faker.image.avatar(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-02-22T20:00:00'),
  },
  {
    id: 2,
    author: {
      picture: faker.image.avatar(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
      },
      {
        type: 'link',
        content: 'Acesse e deixe seu feedback 👉 devonlane.design',
      },
    ],
    publishedAt: new Date('2024-02-20T23:00:00'),
  },
]

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
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
