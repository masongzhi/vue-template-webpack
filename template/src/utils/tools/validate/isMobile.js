export default function (mobile) {
  if (!mobile) return false
  try {
    mobile = mobile.toString()
  } catch (e) {}
  return !!mobile.trim().match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/)
}
