import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Post, PostProps } from './components/Post'
import { faker } from '@faker-js/faker'

import styles from './app.module.css'

import './global.css'

export interface Author {
  name: string
  role: string
  picture: string
  cover?: string
}

const posts: PostProps[] = [
  {
    id: faker.string.uuid(),
    author: {
      picture: faker.image.avatar(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
    },
    content: [
      { type: 'paragraph', content: faker.lorem.words({ min: 2, max: 8 }) },
      {
        type: 'paragraph',
        content: faker.lorem.text(),
      },
      { type: 'link', content: faker.internet.url() },
    ],
    publishedAt: new Date('2024-02-22 20:00:00'),
  },
  {
    id: faker.string.uuid(),
    author: {
      picture: faker.image.avatar(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
    },
    content: [
      { type: 'paragraph', content: faker.lorem.words({ min: 2, max: 8 }) },
      {
        type: 'paragraph',
        content: faker.lorem.text(),
      },
      { type: 'link', content: faker.internet.url() },
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
              id={post.id}
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
