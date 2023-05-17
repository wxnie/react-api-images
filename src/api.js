import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID HJoDawXXOSuBlzE8LaiyY6_KIj7n13j08PCr6n4wK1w'
    },
    params: {
      query: term,
      per_page: 30
    }
  })

  return response.data.results
}

export default searchImages