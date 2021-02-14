const async = require('async');
const fs = require('fs');
const pg = require('pg');

// Connect to the "bank" database.
// * DOES NOT RECOGNIZE THE process.env from the config... ?
var config = {
	host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
	connectionString:
		'postgres://<USER>:<PASS>@free-tier.gcp-us-central1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=./cc-ca.crt&options=--cluster=leafy-ox-701',
	database: 'leafy-ox-701.defaultdb',
	port: 26257,
};

postgres: var pool = new pg.Pool(config);
pool.connect(async function (err, client, done) {
	// Close communication with the database and exit.
	var finish = function () {
		done();
		process.exit();
	};

	pool.query('SELECT * FROM yuhacksapp.nounlist ', (error, result) => {
		console.log(result);
	});

	if (err) {
		console.error('could not connect to cockroachdb', err);
		finish();
	}
});
