import axios from 'axios'

interface Data {
  count: number
  id: string
  name: string
}

export const getData = (url: string): Data[] => {
  axios
    .get(url)
    .then((results) => {
      return results.data
    })
    .catch((error) => {
      console.log(error.state)
    })

  return [{ count: 0, id: '', name: '' }]
}

export default getData
