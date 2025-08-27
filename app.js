const express = require('express');

const app = express();

const port = 3000;;


app.get('/', (req, res) => {
    res.send("https://www.linkedin.com/in/wesley-vargas-de-andrade-54b413163/overlay/photo/");
});

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
});
