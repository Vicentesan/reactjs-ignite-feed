import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment(props) {
  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src={props.author.avatar}
        alt={`${props.author.name} Profile Picture`}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.author.name}</strong>
              <time title={publishedDateFormatted} dateTime={props.publishedAt}>
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>{props.likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
