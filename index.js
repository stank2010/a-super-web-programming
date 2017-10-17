const express = require('express')
const app = express()

const port = 3030

app.get('/',(req,res)=>{
  console.log(req)
  res.end(`Hello`)
  res.end(`Listen in port 3030`)
})

app.listen(port,functionMonitor(port))

const functionMonitor = (port) => {
  console.log(`app is already run on port ${port}`)
}
