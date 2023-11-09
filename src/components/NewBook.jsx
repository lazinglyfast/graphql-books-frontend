import { useState } from "react"
import { useField } from "../hooks"
import { useMutation } from "@apollo/client"
import { CREATE_BOOK, ALL_BOOKS } from "../queries"

const NewBook = () => {
  const [genres, setGenres] = useState([])
  const title = useField("text")
  const author = useField("text")
  const published = useField("text")
  const genre = useField("text")
  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }],
  })

  const addGenre = () => {
    setGenres(genres.concat(genre.props.value))
  }

  const newBook = () => {
    const book = {
      variables: {
        title: title.props.value,
        author: author.props.value,
        published: parseInt(published.props.value),
        genres,
      },
    }
    createBook(book)
    title.reset()
    author.reset()
    published.reset()
    genre.reset()
    setGenres([])
  }

  return (
    <div>
      <div>
        title <input {...title.props} />
      </div>
      <div>
        author <input {...author.props} />
      </div>
      <div>
        published <input {...published.props} />
      </div>
      <div>
        <input {...genre.props} />
        <button type="button" onClick={addGenre}>
          add genre
        </button>
      </div>
      <div>genres: {genres.join(", ")}</div>
      <button type="button" onClick={newBook}>
        create book
      </button>
    </div>
  )
}

export default NewBook
