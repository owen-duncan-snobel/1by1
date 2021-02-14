import React from 'react';
import Form from './components/form';
const App = () => {
	return (
		<div className="App min-h-screen bg-gray-800">
			<nav
				role="navigation"
				className="flex justify-between items-center h-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white relative"
			>
				<a href="" className="pl-6 font-extrabold">
					1 by 1
				</a>
				<div className="px-4 cursor-pointer md:hidden" id="bars">
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</div>
				<div className="hidden md:block" id="menu">
					<a href="#home" className="p-4 font-bold">
						Home
					</a>
					<a href="#about" className="p-4 font-bold">
						About
					</a>
				</div>
			</nav>
			<div className="h-full bg cover bg-indigo-300">
				<div className="text-center font-bold">
					<h1 className="lg:text-9xl text-5xl sm:text-6xl text5xl mb-10 text-indigo-600 hover:text-white duration-300">
						Create your bio
					</h1>
				</div>
				<div className="place-self-center sm:w-1/3 mx-auto">
					<h1 className="lg:text-9sm sm:text-5sm text-3sm mb-10 text-black">
						We are aiming to primarily assist small and new
						businesses in their mission to start or maintain an
						online presence by making it quick and easy to find new
						things to post. All you have to do is enter a bio in our
						website and it will come up with multiple images that
						relate to the wording in the bio.
					</h1>
				</div>
				<Form />
			</div>
		</div>
	);
};

export default App;
