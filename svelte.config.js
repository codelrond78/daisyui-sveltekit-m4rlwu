import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

const config = {
  kit: {
    adapter: adapter(),
    methodOverride: {
      allowed: ['PATCH', 'DELETE'],
    },
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    //sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
    }),
  ],
};

export default config;
