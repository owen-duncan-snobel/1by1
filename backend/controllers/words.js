const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { bearer } = require('../config');

// * EXAMPLE DATA
let example = {
	icons: [
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/16/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/20/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/24/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/32/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/48/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/64/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/128/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/256/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/png/512/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence7-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/2890571/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/2890571/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/svg/3352675/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/2890571/formats/ai/3352675/download',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 2890571,
			tags: [
				'ai',
				'artificial intelligence',
				'automaton',
				'brain',
				'dog',
				'robotics',
				'technology',
			],
			published_at: '2018-01-15T06:04:49.890Z',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'computer-hardware',
					name: 'Computer & hardware',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/16/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/20/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/24/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/32/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/48/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/64/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/128/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/256/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/png/512/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C220-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427862/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427862/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/svg/2885565/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427862/formats/ai/2885565/download',
						},
					],
					size_width: 91,
					size: 91,
					size_height: 91,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 2427862,
			tags: ['barbecue', 'bbq', 'hot dog', 'sausage'],
			published_at: '2017-07-26T13:41:17.024',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'food-drinks',
					name: 'Food & drinks',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/16/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/20/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/24/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/32/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/48/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/64/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/128/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/256/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/png/512/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C207-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427857/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427857/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/svg/2885560/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427857/formats/ai/2885560/download',
						},
					],
					size_width: 91,
					size: 91,
					size_height: 91,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 2427857,
			tags: ['chili', 'food', 'hot dog', 'picnic', 'weiner'],
			published_at: '2017-07-26T13:41:17.024Z',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'food-drinks',
					name: 'Food & drinks',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/16/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/20/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/24/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/32/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/48/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/64/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/128/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/256/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/png/512/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/3316536/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/3316536/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/svg/3781246/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/ai/3781246/download',
						},
						{
							format: 'csh',
							download_url:
								'https://api.iconfinder.com/v4/icons/3316536/formats/csh/3781246/download',
						},
					],
					size_width: 150,
					size: 150,
					size_height: 150,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 3316536,
			tags: ['animal', 'cachorro', 'dog', 'dogs'],
			published_at: '2018-06-17T23:41:48.397',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'animal',
					name: 'Animals',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/16/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/20/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/24/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/32/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/48/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/64/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/128/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/256/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/png/512/download',
							preview_url:
								'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C221-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427868/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/2427868/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/svg/2885571/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/2427868/formats/ai/2885571/download',
						},
					],
					size_width: 91,
					size: 91,
					size_height: 91,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 2427868,
			tags: ['barbecue', 'bbq', 'fork', 'hot dog', 'sausage'],
			published_at: '2017-07-26T13:41:17.024',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'food-drinks',
					name: 'Food & drinks',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/16/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/20/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/24/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/32/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/48/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/64/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/128/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/256/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/png/512/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/zynga-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/334845/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/334845/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/svg/721752/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/334845/formats/ai/721752/download',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 334845,
			tags: ['zynga', 'zinga', 'dog', 'domestic', 'pet', 'social'],
			published_at: '2014-09-16T17:36:23.212',
			is_premium: false,
			styles: [
				{
					identifier: 'badge',
					name: 'Badge',
				},
			],
			categories: [
				{
					identifier: 'sign-symbol',
					name: 'Signs & symbols',
				},
				{
					identifier: 'social-media',
					name: 'Social media',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/16/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/20/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/24/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/32/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/48/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/64/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/128/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/256/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/png/512/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/food-beverages-outline-1/449/HotDog-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/4053437/formats/svg/4521924/download',
						},
					],
					size_width: 449,
					size: 449,
					size_height: 449,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 4053437,
			tags: [
				'gastronomy',
				'kitchen',
				'restaurant',
				'fast food',
				'hot dog',
			],
			published_at: '2018-12-26T10:34:04.587',
			is_premium: false,
			styles: [
				{
					identifier: 'outline',
					name: 'Outline',
				},
			],
			categories: [
				{
					identifier: 'food-drinks',
					name: 'Food & drinks',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/16/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/20/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/24/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/32/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/48/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/64/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/128/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/256/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/png/512/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/japan-flat-2/340/dog_pet_animal_japanese_shiba_inu_japan-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/5296652/formats/svg/5771919/download',
						},
					],
					size_width: 340,
					size: 340,
					size_height: 340,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 5296652,
			tags: ['animal', 'dog', 'inu', 'japan', 'japanese', 'pet', 'shiba'],
			published_at: '2019-11-04T00:28:09.530',
			is_premium: false,
			styles: [
				{
					identifier: 'flat',
					name: 'Flat',
				},
			],
			categories: [
				{
					identifier: 'culture-communities',
					name: 'Culture & communities',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/16/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/20/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/24/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/32/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/48/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/64/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/128/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/256/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/png/512/download',
							preview_url:
								'https://cdn2.iconfinder.com/data/icons/diseases-and-injury-1/340/rabies_health_dog_medical_virus_animal_vaccine_disease-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/5859960/formats/svg/6338149/download',
						},
					],
					size_width: 340,
					size: 340,
					size_height: 340,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 5859960,
			tags: [
				'animal',
				'disease',
				'dog',
				'medical',
				'rabies',
				'vaccine',
				'virus',
			],
			published_at: '2020-03-06T09:11:58.594',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'hospitals-healthcare',
					name: 'Hospitals & healthcare',
				},
				{
					identifier: 'coronavirus',
					name: 'Coronavirus/Covid-19',
				},
			],
		},
		{
			is_icon_glyph: false,
			raster_sizes: [
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/16/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-16.png',
						},
					],
					size_width: 16,
					size: 16,
					size_height: 16,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/20/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-20.png',
						},
					],
					size_width: 20,
					size: 20,
					size_height: 20,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/24/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-24.png',
						},
					],
					size_width: 24,
					size: 24,
					size_height: 24,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/32/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-32.png',
						},
					],
					size_width: 32,
					size: 32,
					size_height: 32,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/48/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-48.png',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/64/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-64.png',
						},
					],
					size_width: 64,
					size: 64,
					size_height: 64,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/128/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-128.png',
						},
					],
					size_width: 128,
					size: 128,
					size_height: 128,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/256/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-256.png',
						},
					],
					size_width: 256,
					size: 256,
					size_height: 256,
				},
				{
					formats: [
						{
							format: 'png',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/png/512/download',
							preview_url:
								'https://cdn4.iconfinder.com/data/icons/breakfast-14/48/sausage-512.png',
						},
					],
					size_width: 512,
					size: 512,
					size_height: 512,
				},
			],
			containers: [
				{
					format: 'ico',
					download_url:
						'https://api.iconfinder.com/v4/icons/2693202/containers/ico/download',
				},
				{
					format: 'icns',
					download_url:
						'https://api.iconfinder.com/v4/icons/2693202/containers/icns/download',
				},
			],
			type: 'vector',
			vector_sizes: [
				{
					formats: [
						{
							format: 'svg',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/svg/3153655/download',
						},
						{
							format: 'ai',
							download_url:
								'https://api.iconfinder.com/v4/icons/2693202/formats/ai/3153655/download',
						},
					],
					size_width: 48,
					size: 48,
					size_height: 48,
					target_sizes: [[16, 20, 24, 32, 48, 64, 128, 256, 512]],
				},
			],
			icon_id: 2693202,
			tags: ['food', 'hot dog', 'sausage'],
			published_at: '2017-10-25T15:25:52.443',
			is_premium: false,
			styles: [
				{
					identifier: 'filled-outline',
					name: 'Filled outline',
				},
			],
			categories: [
				{
					identifier: 'food-drinks',
					name: 'Food & drinks',
				},
			],
		},
	],
	total_count: 152,
};

router.get('/', (req, res) => {
	res.send('');
});

router.post('/', (req, res) => {
	res.send(example);
});

/* 
router.post('/', async (req, res) => {
	try {
		let data = [];
		let bio = req.body.bio;
		const sanitizedBio = bio.split('#').join('').split(' ');

		const options = {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + bearer,
			},
		};

		await fetch(
			'https://api.iconfinder.com/v4/icons/search?query=dog&count=9&premium=0&license=empty',
			options
		)
			.then((response) => response.json())
			.then((data) => res.send(data))
			.catch((err) => console.error(err));
		// * TO GET DATA FROM THE RETURN map the data
	} catch (error) {
		console.log(error);
	}
}); */

module.exports = router;
