import axios from 'axios'

export default function getNotes() {
  return axios.get('http://localhost:5100/notes')
}
