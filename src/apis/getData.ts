import axios from 'axios'

export const getData = (url: string) => {
  axios
    .get(url)
    .then((results) => {
      return results.data
    })
    .catch((error) => {
      console.log(error.status)
    })
}

export default getData
