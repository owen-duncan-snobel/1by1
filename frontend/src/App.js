import React, { useState, useEffect } from 'react';

function App() {
	const [bio, setBio] = useState('');

	const mySubmitHandler = (event) => {
		// * Prevent reload
		event.preventDefault();
		var data = new URLSearchParams();
		data.append('bio', bio);

		const url = 'http://localhost:4000/';
		fetch(url, {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	const myChangeHandler = (event) => {
		setBio(event.target.value);
	};

	return (
		<div className="App" className="container mx-auto">
			<form onSubmit={mySubmitHandler} method="post">
				<p>Enter a bio, and submit:</p>
				<input name="bio" type="text" onChange={myChangeHandler} />
				<input type="submit" />
			</form>
		</div>
	);
}

export default App;
