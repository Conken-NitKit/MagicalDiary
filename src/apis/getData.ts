import axios from 'axios'
interface Data {
  name: string
  id: string
}

export const getData = (url: string): Data[] => {
  const returnData = [{ name: '', id: '' }]

  axios
    .get(url)
    .then((results) => {
      console.log(results.data)
      return results.data
    })
    .catch((error) => {
      console.log(error.status)
    })

  return returnData
}

export default getData
