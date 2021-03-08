const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bookmarklet', (req, res) => {
  res.send(`(function () {
        console.log('removeText')
        const p = document.getElementsByTagName('p')
        for (let i = 0; i < p.length; i++) {
          p[i].innerHTML = ''
        }
      })()
      `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
