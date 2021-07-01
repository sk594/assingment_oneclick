const express = require("express");

const index = require('./src/routes/index');
const PORT = process.env.PORT || 3000;

const app = express()
const server = require("http").createServer(app)
app.use(express.json())
app.use("/", index);

app.get('/', (req, res) => {
    res.status(200).send('hello')
});


server.listen(PORT, () => {
  console.log(`Server running on Port no: ${PORT}`);
});


