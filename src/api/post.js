import axios from 'axios'

export function getNotes() {
  return axios.get('http://localhost:5174/notes')
}

export function getPosts() {
  return axios.get('http://localhost:5174/api/posts')
}

export function uploadSoundFile() {
  return axios.post('http://localhost:5174/api/meetNote/createNote')
}

export function convertToText() {
  return axios.post('http://localhost:5174/api/meetNote/convert')
}

export function getNote() {
  return axios.get('http://localhost:5174/api/meetNote/detail')
}

export function patchNoteInfo(noteId) {
  return axios.patch(`http://localhost:5174/notes/${noteId}`)
}
