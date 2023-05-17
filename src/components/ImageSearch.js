import { useState } from "react"
import "../styles/SearchBar.css"

function ImageSearch({onSubmit}) {
  const [term, setTerm] = useState('')

  const handleInputChange = (event) => {
    setTerm(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  return (
    <div>
      <form className="search-bar__form" onSubmit={handleFormSubmit}>
        <input className="search-bar" value={term} onChange={handleInputChange} placeholder="Enter search term"/>
      </form>
    </div>
  )
}

export default ImageSearch