const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/heavy-ping', (req, res) => {

    const { query: { n } } = req;

    let sum

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            sum = (i + j) - (j + i) - 1;
        }
    }

    setTimeout(() => {
        res.send('heavy-ping' + sum);
    }, 50)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})