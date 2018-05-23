/**
 * 分割数字，默认为3位分割，一般用于格式化金额
 * @param  {String or Number} source
 * @param  {Number}           length 分割数
 * @return {String}
 *
 * @example
 * numberComma(21342132)      // 21,342,132
 * numberComma(21342132, 4)   // 2134,2132
 * numberComma(21342132.234)  // 21,342,132.234
 */
export default function (source, length = 3) {
  source = String(source).split('.')
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), '$1,')
  return source.join('.')
}
