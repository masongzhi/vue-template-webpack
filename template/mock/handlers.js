const path = require('path')
const fs = require('fs')
const _ = require('lodash')

// 返回路径目录数组
function _findSync (startAbsolutePath) {
  let result = []

  function finder (_p) {
    const files = fs.readdirSync(_p)
    files.forEach((val, index) => {
      const fPath = path.join(_p, val)
      const stats = fs.statSync(fPath)
      if (stats.isDirectory()) finder(fPath)
      else if (stats.isFile()) result.push(fPath)
    })
  }

  finder(startAbsolutePath)
  return result
}

/**
 * 将路径转换为对象
 * ep: 'user/login.json' => { user: { login: data } }
 */
function _handlePathToObj (_p) {
  const arr = _p.replace('.json', '').split('/')
  return {[arr.join('_')]: require(path.join(__dirname, 'data', _p))}
}

// 将data目录下的文件整合为一个db数据
function dbHandler (startPath) {
  let db = {}

  const startAbsolutePath = path.join(__dirname, startPath)
  const filePaths = _findSync(startAbsolutePath)

  filePaths.forEach(_p => {
    // 获取相对路径
    const relativePath = path.relative(path.join(__dirname, 'data'), _p)
    db = _.merge(db, _handlePathToObj(relativePath))
  })

  return db
}

function rewriterHandler (db) {
  const rewriter = {'/api/*': '/$1'}
  for (const key of Object.keys(db)) {
    const tmpKey = `/${key.replace(/_/g, '/')}`
    rewriter[tmpKey] = `/${key}`
  }
  return rewriter
}

module.exports = {
  dbHandler,
  rewriterHandler
}
