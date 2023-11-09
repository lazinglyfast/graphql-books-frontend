import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom"
import Authors from "./components/Authors"
import Books from "./components/Books"
import NewBook from "./components/NewBook"

const App = () => {
  return (
    <Router>
      <button type="button">
        <Link to="/">authors</Link>
      </button>
      <button type="button">
        <Link to="/books">books</Link>
      </button>
      <button type="button">
        <Link to="/book/new">add book</Link>
      </button>
      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/new" element={<NewBook />} />
      </Routes>
    </Router>
  )
}

export default App
