/**
 * 将负数转换为正数
 * @param  {String or Number} source
 * @return {String}
 *
 * @example
 * toPositive(-21342132)      // 21342132
 */
export default function (source) {
  if (source < 0) {
    return 0
  }
  return source
}
