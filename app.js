const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/heavy-ping', (req, res) => {
    setTimeout(() => {
        res.send('heavy-ping');
    }, 50)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})