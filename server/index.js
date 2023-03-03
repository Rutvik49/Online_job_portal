const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectToMongo = require('./DB')
const app = express()

connectToMongo()
app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use('/api',require('./routes'))

app.listen(process.env.PORT, () => {
  console.log(`app is listening on port ${process.env.PORT}`)
})
