import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: [
				'/',
				'/blog',
				'/blog/communique-10-06-2025',
				'/donate',
				'/download',
				'/github/link/already',
				'/github/link/error',
				'/github/link/not_available',
				'/github/link/success',
				'/discord/contester-une-sanction',
				'/kenavo',
			],
		},
	}
};