const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');


const startServer = async() => {
    await connectToMongo();
}

const app = express();
const port = 8888;

app.use(cors())
app.use(express.json());

//Avaliable routes
app.use('/api/auth', require('./routes/auth'));

startServer();

app.listen(port, () => {
    console.log(`zengardining backend is listening at http://localhost:${port}`)
})