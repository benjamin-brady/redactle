# Redactle

A guessing game inspired by https://www.redactle.com/ built in svelte. The page lods with an article from Wikipedia which is displayed with most of the words redacted. The user must guess word's to reveal the content with the objective of guessing the title of the article in as few guesses as possible.

This is a work in progress; Content is currently hardcoded to 10 articles. Content is fetched from Wikipedia's REST API. My motivation for starting this is to do away with the 1 game per day limit that redactle.com enforces.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
