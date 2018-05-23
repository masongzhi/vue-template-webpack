import fetch from '@/utils/fetch'

export function fetchUserList (options) {
  return fetch('/user/list', options)
}

export function createUser (options) {
  options.method = 'post'
  return fetch('/user', options)
}
