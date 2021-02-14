import React, { useState, useEffect } from 'react';
import ImageFrame from './image_frame';

const Form = () => {
	const [bio, setBio] = useState('');
	const [images, setImages] = useState({ icons: [{ icon_id: -1 }] });

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
			.then((data) => setImages(data));
	};

	const myChangeHandler = (event) => {
		setBio(event.target.value);
	};

	return (
		<form className="text-center" onSubmit={mySubmitHandler}>
			<p>Enter your bio:</p>
			<textarea
				className="form-textarea mt-1 center w-30"
				rows="3"
				placeholder="Enter your bio."
				type="text"
				onChange={myChangeHandler}
			/>
			<input
				className="focus:ring-2 focus:ring-indigo-600 bg-red-600 hover:bg-red-700"
				type="submit"
			/>
			<div>
				<ImageFrame data={images} />
			</div>
		</form>
	);
};
export default Form;
