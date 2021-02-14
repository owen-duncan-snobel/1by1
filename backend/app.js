const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = require('./config');
const async = require('async');
const fs = require('fs');
const pg = require('pg');
const app = express();

const words = require('./controllers/words');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the "bank" database.
// * DOES NOT RECOGNIZE THE process.env from the config... ?
var config = {
	host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
	connectionString:
		'postgres://db_admin:Testing09144@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=./cc-ca.crt&options=--cluster=leafy-ox-701',
	database: 'leafy-ox-701.defaultdb',
	port: 26257,
};

// Create a pool.
postgres: var pool = new pg.Pool(config);

pool.connect(function (err, client, done) {
	// Close communication with the database and exit.
	var finish = function () {
		done();
		process.exit();
	};

	pool.query('SELECT * FROM yuhacksapp.nounlist LIMIT 10');
	if (err) {
		console.error('could not connect to cockroachdb', err);
		finish();
	}
});

app.get('/', (res, req) => {
	pool.query('SELECT * FROM yuhacksapp.nounlist ', (error, result) => {
		console.log(result);
	});
});
// * Words Controller (Responsible for splitting up the sentence and querying for the words)
app.use('/', words);
app.listen(port, () => {
	console.log(
		`Example app listening at http://localhost:${process.env.PORT}`
	);
});
