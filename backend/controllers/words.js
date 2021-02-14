const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { bearer } = require('../config');

router.get('/', (req, res) => {
	res.send('');
});

router.post('/', (req, res) => {
	res.send(example);
});

/* 
router.post('/', async (req, res) => {
	try {
		let data = [];
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
			.then((data) => res.send(data))
			.catch((err) => console.error(err));
		// * TO GET DATA FROM THE RETURN map the data
	} catch (error) {
		console.log(error);
	}
}); */

module.exports = router;
