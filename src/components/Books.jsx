import { useQuery } from "@apollo/client"
import { ALL_BOOKS } from "../queries"
import Book from "./Book"

const Books = () => {
  const query = useQuery(ALL_BOOKS)

  if (query.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>books</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
        </thead>
        <tbody>
          {query.data.allBooks.map((b) => (
            <Book key={b.id} book={b} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books
