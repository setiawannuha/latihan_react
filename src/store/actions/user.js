import axios from 'axios'

export const GET_ALL_USERS = () => {
  return {
    type: "GET_ALL_USERS",
    payload: axios.get('https://jsonplaceholder.typicode.com/users')
  }
}

export const INSERT_USER = (body) => {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', body)
      resolve(response.data)
    } catch (error) {
      reject(error.response.data)
    }
  })
}