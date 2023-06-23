# Portfolio Template

## Testimonials

> _"A blazingly-fast and easy-to-use portfolio template for developers of any level AND FOR FREE?!!?_ 😱 _" - Steve Jobs, probably_

> _"I've never seen anything like this before. It's amazing!" - everyone that's ever used this template_

## Template vs regular repository

This repository is a template, which means that it can be used as a base for other repositories. This is useful for creating new repositories with the same files and directory structure as this one, whilst not maintaining the git history of the template repository. To create a new repository using this template, click on the `Use this template` button on the top of the page.

To learn more about template repositories, check out the [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Summary

This project showcases a portfolio as a dashboard containing all public Github repositories of the user _(myself, in this case)_. Built and generated using [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/). All pages inside the `/repo` subroute are rendered server-side and shipped with minimal JavaScript. Each page's content is fetched using the [Github API](https://docs.github.com/en/rest) and rendered using [Astro's built-in server-side rendering](https://docs.astro.build/en/guides/server-side-rendering/) and a [Vercel SSR adapter for Astro Apps](https://docs.astro.build/en/guides/integrations-guide/vercel/).

## Getting Started

###### Prerequisites: [Node.js](https://nodejs.org/en/) (`v16.20` or higher) or [Yarn](https://yarnpkg.com/) (`v1.22` or higher)

The project's structure is malleable and can be easily adapted to your needs. To get started with your own version of this portfolio, follow these steps:

1. _(optional)_ Fork this repository. You can also use the [GitHub CLI](https://cli.github.com/) to do this by running `gh repo fork nivaldofarias/portfolio-template`.
2. Clone the forked repository to your local machine and navigate to the project directory.
3. Install the project dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file and populate with the variables from the `.env.example` file.
   1. `GITHUB_API_TOKEN`: A [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). This is required to fetch your repositories and profile information from the Github API. Make sure to enable read access to your repositories.
   2. `GITHUB_API_OWNER`: Your Github username.
   3. `GITHUB_API_URL`: The Github API base URL. This is usually `https://api.github.com`.
   4. `GITHUB_API_VERSION`: The Github API version. This is usually `2022-11-28`.
5. Run `npm run dev` or `yarn dev` to start the development server.
6. Open [http://localhost:3000](http://localhost:3000) with your browser.
7. Start editing the project!

Since Astro apps run on top of [Vite](https://vitejs.dev/), all changes are hot reloaded and reflected in the browser immediately.

## Deploying

This project is configured to be deployed to [Vercel](https://vercel.com/) with [web analytics](https://vercel.com/docs/concepts/analytics) enabled. This can be easily configured to use any other platform of your choice, which all available options are listed in the [Astro documentation](https://docs.astro.build/en/guides/deploy/). To deploy your own version of this portfolio to Vercel, follow these steps:

1. Create an account on [Vercel](https://vercel.com/).
2. On your [dashboard](https://vercel.com/dashboard), create a new project and link it to your forked repository.
3. Navigate to the [settings tab](https://vercel.com/nivaldofarias/portfolio-template/settings) and configure the project's environment variables by copying and pasting the variables from your `.env` file.
4. Deploy.
