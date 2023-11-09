import Author from "./Author"
import { useQuery, useMutation } from "@apollo/client"
import { ALL_AUTHORS, UPDATE_AUTHOR } from "../queries"
import { useField } from "../hooks"

const Authors = () => {
  const query = useQuery(ALL_AUTHORS)
  const name = useField("text")
  const setBornTo = useField("text")

  const [mutateAuthor] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  if (query.loading) {
    return <div>loading...</div>
  }

  const updateAuthor = () => {
    const author = {
      variables: {
        name: name.props.value,
        setBornTo: parseInt(setBornTo.props.value),
      },
    }

    mutateAuthor(author)
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
        </thead>
        <tbody>
          {query.data.allAuthors.map((a) => (
            <Author key={a.id} author={a} />
          ))}
        </tbody>
      </table>

      <h2>Set birthyear</h2>

      <div>
        name <input {...name.props} />
      </div>
      <div>
        born <input {...setBornTo.props} />
      </div>
      <div>
        <button type="button" onClick={updateAuthor}>
          update author
        </button>
      </div>
    </div>
  )
}

export default Authors
