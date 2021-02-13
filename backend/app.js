const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = require('./config');
const app = express();

const words = require('./controllers/words');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// * Words Controller (Responsible for splitting up the sentence and querying for the words)
app.use('/', words);

app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${process.env.PORT}`
	);
});
