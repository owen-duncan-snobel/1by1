import React, { useState, useEffect } from 'react';

const Form = () => {
	const [bio, setBio] = useState('');
	const [images, setImages] = useState([]);

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
		<form className="text-center" onSubmit={mySubmitHandler}>
			<p>Enter your bio:</p>
			<textarea
				className="w-24 md:w-auto"
				type="text"
				onChange={myChangeHandler}
			/>
			<input type="submit" />
		</form>
	);
};
export default Form;
