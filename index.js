const express = require('express')
const app = express()

app.listen(3030,functionMonitor())

const functionMonitor = () => {
  console.log(`app is already run on port 3030`)
}
