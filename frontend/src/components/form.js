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
		<div>
		<form className="text-center" onSubmit={mySubmitHandler}>
			<div class="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans">
  				<div class="row justify-center sm:flex">
    				<div class="col sm:w-1/3 ">
     					<div class="box border rounded flex flex-col shadow bg-white">
        					<div class="box__title bg-grey-lighter px-3 py-2 border-b"><h3 class="text-lg text-indigo-500 font-medium">ENTER YOUR BIO</h3></div>
       							 <textarea placeholder="Lorem ipsum dolor sit ame" class="focus:outline-none text-grey-darkest p-2 m-1 bg-transparent" name="tt"
									onChange={myChangeHandler}></textarea>
     						</div>
    				</div>
  				</div>
				  <br></br>
				  <p><button class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-1.5 px-3 rounded" type="submit">
										Submit Query
									</button> </p>
				<br></br>
				<ImageFrame data={images} />
			</div>
		</form>

		
		</div>
	);
};
export default Form;
