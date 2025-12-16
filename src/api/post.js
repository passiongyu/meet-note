import axios from 'axios'

export function getNotes() {
  return axios.get('http://localhost:5100/notes')
}

//실제로 post
export function uploadSoundFile() {
  return axios.get('http://localhost:5100/upload')
}

//실제로 post
export function convertToText() {
  return axios.get('http://localhost:5100/convert')
}

export function patchNoteInfo(noteId) {
  return axios.patch(`http://localhost:5100/notes/${noteId}`)
}
