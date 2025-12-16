import axios from 'axios'

export function getNotes() {
  return axios.get('http://localhost:5175/notes')
}

export function getPosts() {
  return axios.get('http://localhost:5175/api/posts')
}

//실제로 post
export function uploadSoundFile() {
  return axios.get('http://localhost:5175/upload')
}

//실제로 post
export function convertToText() {
  return axios.get('http://localhost:5175/convert')
}

export function patchNoteInfo(noteId) {
  return axios.patch(`http://localhost:5175/notes/${noteId}`)
}
