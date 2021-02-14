const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port, bearer, db_pass } = require('./config');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://main:${db_pass}@cluster0.mbw7h.mongodb.net/words?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	dbName: 'words',
	useUnifiedTopology: true,
});

client.connect(async (err) => {
	const collection = client.db('words').collection('nouns');

	app.post('/', async (req, res) => {
		try {
			let data = [];
			let bio = req.body.bio;
			let sanitizedBio = bio.replace(/[^a-z0-9]+/gi, ' ');
			let bioArray = sanitizedBio.split(' ');
			const selectedNouns = await collection
				.find({ name: { $in: bioArray } })
				.toArray(function (err, results) {
					sendData(results);
				});

			const sendData = async (results) => {
				const options = {
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + bearer,
					},
				};

				await fetch(
					`https://api.iconfinder.com/v4/icons/search?query=${results[0].name}&count=10&premium=0&license=empty`,
					options
				)
					.then((response) => response.json())
					.then((data) => {
						res.send(data);
					})
					.catch((err) => console.error(err));
			};
			// (**)
		} catch (error) {
			console.log(error);
		}
	});

	// * Words Controller (Responsible for splitting up the sentence and querying for the words)
	app.listen(port, () => {
		console.log(
			`Example app listening at http://localhost:${process.env.PORT}`
		);
	});
});
