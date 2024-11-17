// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ImageMuse',
			social: {
				github: 'https://github.com/boluoim/imagemuse-app',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cloud.umami.is/script.js',
						'data-website-id': 'c7626485-eb26-4ad0-bb3f-ae20b8627473',
						defer: true,
					},
				},
			],
		}),
	],
});
