'use strict'

const app = require('express')()

const PORT = process.env.PORT || 10001

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})

app.get('/', (req, res) => {
  res.send('<html><body>Welcome!</body></html>')
})

