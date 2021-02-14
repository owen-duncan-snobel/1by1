import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { TwitterPicker } from 'react-color';

const ImageFrame = ({ data }) => {
	const [canvases, setCanvases] = useState([]);
	const [background, setBackground] = useState('#fff');

	useEffect(() => {
		// * If the data has not been fetched yet do not render a canvas (-1 icon_id refers to missing id)
		if (data.icons[0].icon_id !== -1) {
			data.icons.map((icon) =>
				setCanvases(initCanvas(icon, icon.icon_id))
			);
		}
	}, [data, background]);

	const initCanvas = (icon, id) => {
		// * hardcodes the location of the image, for the final version you can use ( .download_url for the full version unscaled)
		let imgLink = icon.raster_sizes[7].formats[0].preview_url;
		let canvas = new fabric.Canvas(id.toString(), {
			height: 300,
			width: 300,
			backgroundColor: background,
		});

		fabric.Image.fromURL(imgLink, function (oImg) {
			canvas.add(oImg);
		});
		return canvas;
	};

	const handleChangeComplete = (color) => {
		setBackground(color.hex);
	};

	return (
		<div>
			<div className=" text-center">
				<div className="fixed bottom-0 right-0">
					<div className="col-start-2 col-span-4 mx-auto pr-2 hidden sm:block">
						{data.icons[0].icon_id !== -1 && (
							<TwitterPicker
								color={background}
								onChangeComplete={handleChangeComplete}
								width={250}
								backgroundColor={'red'}
							/>
						)}
					</div>
				</div>
			</div>
			<div>
				<div className="inline-grid gap-1 lg:grid-cols-3 content-center">
					{data.icons.map((icon) => {
						return (
							<canvas
								id={icon.icon_id}
								color={background}
								className="p-2"
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default ImageFrame;
