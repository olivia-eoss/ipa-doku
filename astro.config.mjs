// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MY IPA',
	locales: {
		root: {
		label: 'Deutsch',
		lang: 'de',
		}
	},
	components: {
  		Header: './src/components/Header.astro',
	},

		customCss: [
			// Path to your custom CSS file
			'./src/styles/style.css',
		],
      sidebar: [
        { label: 'Ausgangslage', slug: 'ausgangslage' },
        { label: 'Vorbereitung', slug: 'vorbereitung' },
        { label: 'Durchführung', slug: 'durchführung' },
        { label: 'Bewertung', slug: 'bewertung' },
      ],
		}),
	],
});
