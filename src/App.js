import { useState } from "react"
import ImageSearch from "./components/ImageSearch"
import ImageList from "./components/ImageList"
import searchImages from "./api"

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)
  }


  return (
    <div>
      <ImageSearch onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App
