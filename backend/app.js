const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const app = express();
const words = require('./controllers/words');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// * Words Controller (Responsible for splitting up the sentence and querying for the words)
app.use('/words', words);

// * Main Methods
app.get('/', (req, res) => {
	res.send('GET WORKING!');
});

app.post('/', (req, res) => {
	res.send('POST WORKING');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
