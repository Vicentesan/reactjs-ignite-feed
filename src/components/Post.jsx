import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { faker } from '@faker-js/faker'
import { useState } from 'react'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    {
      id: faker.string.uuid(),
      author: {
        name: faker.person.fullName(),
        picture: faker.image.avatar(),
      },
      content: faker.lorem.text(),
      likes: faker.number.int({ min: 1, max: 520 }),
      publishedAt: faker.date.recent(),
    },
  ])

  const [newCommentText, setNewCommentText] = useState('')

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

  function handleCreateNewComment(e) {
    e.preventDefault()

    setComments([
      ...comments,
      {
        id: faker.string.uuid(),
        author: {
          name: faker.person.fullName(),
          picture: faker.image.avatar(),
        },
        content: newCommentText,
        likes: '0',
        publishedAt: new Date(),
      },
    ])

    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewInvalidComment(e) {
    e.target.setCustomValidity('Por favor, preencha o campo de comentário.')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.content !== commentToDelete,
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

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          function getLink(text) {
            const urlRegex = /(https?:\/\/[^\s]+)/g
            const hashtagRegex = /#(\w+)/g

            const url = text.match(urlRegex)
            const hashtag = text.match(hashtagRegex)

            return {
              url,
              hashtag,
            }
          }

          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>
          if (line.type === 'link')
            return (
              <p key={line.content}>
                <a
                  href={
                    getLink(line.content).url || getLink(line.content).hashtag
                  }
                >
                  {line.content}
                </a>
              </p>
            )
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
