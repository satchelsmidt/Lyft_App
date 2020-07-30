//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const sliceString = require('./slicer')

//initialize app w/ express
const app = express();

//enable cors for all requests
app.use(cors());

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create basic route
app.post('/test', (req, res) => {
    modifiedString = {
        "return_string": sliceString(req.body.string_to_cut)
    }

    console.log(modifiedString)

    return modifiedString
});

//initialize PORT var, set app listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});