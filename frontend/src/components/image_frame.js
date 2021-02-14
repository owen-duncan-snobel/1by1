import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';

const ImageFrame = ({ data }) => {
	const [canvases, setCanvases] = useState([]);

	useEffect(() => {
		// * If the data has not been fetched yet do not render a canvas (-1 icon_id refers to missing id)
		if (data.icons[0].icon_id !== -1) {
			data.icons.map((icon) =>
				setCanvases([...canvases, initCanvas(icon, icon.icon_id)])
			);
		}
	}, [data]);

	console.log(data);
	const initCanvas = (icon, id) => {
		// * hardcodes the location of the image, for the final version you can use ( .download_url for the full version unscaled)
		let imgLink = icon.raster_sizes[7].formats[0].preview_url;
		let canvas = new fabric.Canvas(id.toString(), {
			height: 300,
			width: 300,
			backgroundColor: 'white',
		});

		fabric.Image.fromURL(imgLink, function (oImg) {
			canvas.add(oImg);
		});

		return canvas;
	};

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
