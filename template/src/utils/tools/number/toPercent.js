import isNil from 'lodash/isNil'
import cutFloat from './cutFloat'

export default function toPercent (number) {
  if (isNil(number)) {
    return number
  }

  return cutFloat(number * 100) + '%'
}
