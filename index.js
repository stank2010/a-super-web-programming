const express = require('express')
const app = express()

const port = 3030

app.get('/',(req,res)=>{
  console.log(req)
  res.send(`Hello`)
  res.send(`Listen in port 3030`)
})

app.get('/stank',(req,res)=>{
  console.log(req)
  res.send(`Stank`)
})

app.listen(port,functionMonitor(port))

const functionMonitor = (port) => {
  console.log(`app is already run on port ${port}`)
}
