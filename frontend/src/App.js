import React, { useState, useEffect } from 'react';
import Form from './components/form';
const App = () => {
	return (
		<div className="App ">
			<nav
				role="navigation"
				className="flex justify-between items-center h-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white relative"
			>
				<a href="index.html" className="pl-6">
					NAME
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
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					</svg>
				</div>
				<div className="hidden md:block" id="menu">
					<a href="index.html" className="p-4">
						Home
					</a>
					<a href="about.html" className="p-4">
						About
					</a>
				</div>
			</nav>
			<div className="h-screen bg-gray-800">
				<Form />
			</div>
		</div>
	);
};

export default App;
