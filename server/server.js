require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/user', function (request, response) {


    let body = request.body;

    if (body.name === undefined) {
        response.status(400).json(
            {
                ok: false,
                message: 'Name is necessary'
            }
        );
    }
    else {
        response.json({ person: body });
    }




});

app.get('/user', function (request, response) {
    response.json

        ('get user');
});



app.put('/user/:id', function (request, response) {

    let id = request.params.id;

    response.json({ id });
});

app.delete('/user', function (request, response) {
    response.json('delete user');
});

app.listen(process.env.PORT, () => {
    console.log('Rest Server listening on port: ', process.env.PORT );
});