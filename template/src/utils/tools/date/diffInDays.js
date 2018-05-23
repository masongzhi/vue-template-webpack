import isDate from 'lodash/isDate'

const MS_PER_DAY = 1000 * 60 * 60 * 24

/**
 * 时间差比较（天）
 * @param  {Date} start 开始时间
 * @param  {Date} end   结束时间
 * @return {Number}     相差天数
 *
 * @example
 *
 * diffInDays(1490264167659, 1490856600000)
 * // 7
 * diffInDays(new Date(), 1490856600000)
 * diffInDays(Date.now(), 1490856600000)
 */
export default function (start, end) {
  if (!isDate(start)) {
    start = new Date(start)
  }

  if (!isDate(end)) {
    end = new Date(end)
  }

  const startUtcDate = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
  const endUtcDate = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())

  return Math.floor((endUtcDate - startUtcDate) / MS_PER_DAY)
}
