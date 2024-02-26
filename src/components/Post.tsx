import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { faker } from '@faker-js/faker'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './Post.module.css'
import { Author } from '../app'

export interface PostContentProps {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  id: string
  author: Author
  content: PostContentProps[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    {
      id: faker.string.uuid(),
      author: {
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        picture: faker.image.avatar(),
      },
      content: faker.lorem.text(),
      likes: faker.number.int({ min: 1, max: 520 }),
      publishedAt: faker.date.recent(),
    },
  ])

  const [newCommentText, setNewCommentText] = useState<string>('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()

    setComments([
      ...comments,
      {
        id: faker.string.uuid(),
        author: {
          name: faker.person.fullName(),
          role: faker.person.jobTitle(),
          picture: faker.image.avatar(),
        },
        content: newCommentText,
        likes: 0,
        publishedAt: new Date(),
      },
    ])

    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Por favor, preencha o campo de comentário.')
  }

  function deleteComment(commentContentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.content !== commentContentToDelete,
    )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentInputEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar author={author} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          function getLink(text: string) {
            const urlRegex = /(https?:\/\/[^\s]+)/g
            const hashtagRegex = /#(\w+)/g

            const url = text.match(urlRegex)?.toString()
            const hashtag = text.match(hashtagRegex)?.toString()

            return {
              url,
              hashtag,
            }
          }

          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>
          if (line.type === 'link') {
            const link = getLink(line.content)
            return (
              <p key={line.content}>
                <a href={link.url || link.hashtag}>{line.content}</a>
              </p>
            )
          }
          return null
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewInvalidComment}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            publishedAt={comment.publishedAt}
            content={comment.content}
            likes={comment.likes}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
