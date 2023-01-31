const express = require('express')
const cors = require('cors')
const DBconnection = require('./DB')
const app = express()

DBconnection()
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes'))

app.listen(5000, () => {
  console.log('app is listening on port 5000')
})
