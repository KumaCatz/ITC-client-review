const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

//routes
app.use('/database', require('./routes/db.routes'));

//error handling 
app.use((err, req, res, next) => {
    console.log(err);

    try {
        const [statusCode, msg] = err;
        res.status(statusCode).send({
            error: true,
            message: msg
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: err.message
        })
    }
})

app.listen(2500, () => {
    console.log('express is listening on port: 2500');
})