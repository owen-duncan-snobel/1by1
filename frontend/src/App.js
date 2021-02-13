import React, { useState, useEffect } from 'react';

function App() {
	const [bio, setBio] = useState('');

	const mySubmitHandler = (event) => {
		event.preventDefault();
		console.log(bio);
	};

	const myChangeHandler = (event) => {
		console.log(event.target.value);
		setBio(event.target.value);
	};

	return (
		<div className="App" className="container mx-auto">
			<form className="text-center" onSubmit={mySubmitHandler}>
				<p>Enter your name, and submit:</p>
				<textarea type="text" onChange={myChangeHandler} />
				<input type="submit" />
			</form>
		</div>
	);
}

export default App;
