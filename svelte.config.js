import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
	//paths: {base: process.env.GITHUB_ACTION ? process.env.GITHUB_REPOSITORY.replace(/^[^/]+\//gi, '/') : ''},
	paths: {base: '/redactle'},
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
};