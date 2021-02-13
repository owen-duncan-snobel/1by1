const express = require('express');
const router = express.Router();

// middleware that is specific to this router
// define the home page route
router.get('/', (req, res) => {
	res.send('Birds home page');
});
// define the about route
router.get('/about', (req, res) => {
	res.send('About birds');
});

router.post('/', (req, res) => {
	console.log(req);
	res.send('working form');
});
module.exports = router;
