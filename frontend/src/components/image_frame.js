import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const ImageFrame = ({ data }) => {
	const [canvas, setCanvas] = useState('');
	const [canvases, setCanvases] = useState([]);
	const [numArr, setNumArr] = useState([]);

	useEffect(() => {
		if (data.icons[0].icon_id !== -1) {
			data.icons.map((icon) =>
				setCanvases([...canvases, initCanvas(icon.icon_id)])
			);
		}
	}, [data]);

	const initCanvas = (id) =>
		new fabric.Canvas(id.toString(), {
			height: 300,
			width: 300,
			backgroundColor: 'white',
		});

	return (
		<div>
			<h1></h1>
			<div>
				<div className="inline-grid gap-1 grid-cols-3 content-center">
					{data.icons.map((icon) => {
						return <canvas id={icon.icon_id} className="p-2" />;
					})}
				</div>
			</div>
		</div>
	);
};
export default ImageFrame;
