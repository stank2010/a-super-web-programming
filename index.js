const express = require('express')
const app = express()

const PORT = 3030

app.get('/',(req,res)=>{
  console.log(req)
  res.end(`Hello`)
})

app.listen(PORT,functionMonitor(PORT))

const functionMonitor = (port) => {
  console.log(`app is already run on port ${port}`)
}
