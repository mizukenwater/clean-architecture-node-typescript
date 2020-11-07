import express from 'express'
import router from './router'
import bodyParser from 'body-parser'

const app = express()

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Route設定
app.use('/api', router)

app.listen(3000, () => {
  console.log('listening on port 3000')
})

export default app