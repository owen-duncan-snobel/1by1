const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { bearer } = require('../config');

// * EXAMPLE DATA
let data = JSON.stringify({
	glossary: {
		title: 'example glossary',
		GlossDiv: {
			title: 'S',
			GlossList: {
				GlossEntry: {
					ID: 'SGML',
					SortAs: 'SGML',
					GlossTerm: 'Standard Generalized Markup Language',
					Acronym: 'SGML',
					Abbrev: 'ISO 8879:1986',
					GlossDef: {
						para:
							'A meta-markup language, used to create markup languages such as DocBook.',
						GlossSeeAlso: ['GML', 'XML'],
					},
					GlossSee: 'markup',
				},
			},
		},
	},
});

router.get('/', (req, res) => {
	res.send(data);
});

router.post('/', async (req, res) => {
	try {
		let bio = req.body.bio;
		const sanitizedBio = bio.split('#').join('').split(' ');

		const options = {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + bearer,
			},
		};

		await fetch(
			'https://api.iconfinder.com/v4/icons/search?query=dog&count=10&premium=0&license=empty',
			options
		)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	} catch (error) {
		console.log(error);
	}
	res.send(data);
});

module.exports = router;
