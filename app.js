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
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < n; l++) {
                    sum = (i * .01 + j * .02 + k * .03 + l * 0.4) - (i * 0.7 + j * 0.6 + k * 0.5 + l * 0.4) - 1;
                }
            }
        }
    }

    setTimeout(() => {
        res.send('heavy-ping' + sum);
    }, 50)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})