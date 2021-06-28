import axios from 'axios'

export const rankingData = (url: string) => {
  axios
    .get(url)
    .then((results) => {
      return results.data
    })
    .catch((error) => {
      console.log(error.status)
    })
}

export default rankingData
