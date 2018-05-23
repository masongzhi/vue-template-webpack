export default function (name) {
  if (!name) return false
  try {
    name = name.toString()
  } catch (e) {}
  return !!name.trim().match(/^[\u4E00-\u9FA5]{2,100}$/)
}
