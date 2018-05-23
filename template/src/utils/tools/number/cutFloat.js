import floor from 'lodash/floor'
import isNumber from 'lodash/isNumber'

export function fixedFloat (number, byte = 2) {
  if (!number) {
    return 0
  }

  return parseFloat(number.toFixed(parseInt(byte)))
}

export function fixedFloatPro (number) {
  const left = Math.abs(number - fixedFloat(number))
  // 是 0.34999999999 的情况才 fix
  if (left < 0.00001) {
    return fixedFloat(number)
  }
  return number
}

export default function cutFloat (number, digits = 2) {
  if (!number || digits < 0 || !isNumber(number)) {
    return number
  }

  number = fixedFloatPro(number)
  const isMinus = (number < 0)
  if (isMinus) {
    number = number * -1
  }
  const result = fixedFloatPro(floor(number, digits))
  return result * (isMinus ? -1 : 1)
}
