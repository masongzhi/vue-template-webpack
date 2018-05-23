export default function getTomorrow () {
  let now = new Date()
  return new Date(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate() + 1}`)
}
