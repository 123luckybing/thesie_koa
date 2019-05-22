const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const fs = require('fs')
const path = require('path')
const morgan = require('koa-morgan')
// 引用路由
const index = require('./routes/index')
const commend = require('./routes/commend')
const addData = require('./routes/addData')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger 项目日志 使用koa-morgan
app.use(async (ctx, next) => {
  await next()
})
const logFile = path.join(__dirname, 'logs', 'access.log')
const accessLogStream = fs.createWriteStream(logFile, { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

// routes
app.use(index.routes(), index.allowedMethods())
app.use(commend.routes(), commend.allowedMethods())
app.use(addData.routes(), addData.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
