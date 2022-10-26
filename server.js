const express = require('express')  
const app = express() 
// Tạo ra 1 app bằng express
const port = 5000
// port tùy ý, nhưng phải  > 1000
// localhost ở máy server hiện tai

var router = express.Router();


// client (web browser - trình duyệt) tạo 1 request đến server (được tạo ra bằng express) thông qua port là localhost:3000

app.get('/', (req, res) => {
  res.json('Home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })