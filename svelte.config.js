import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            // pages: 'build',
            // assets: 'build',
            // fallback: undefined,
            // precompress: false,
            // // strict: true
			// strict: false,
			// fallback: null
        })
    },
	preprocess: vitePreprocess()
};

export default config;
