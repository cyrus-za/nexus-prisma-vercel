# Nexus Framework + Prisma2 deployed to Vercel

This is an example with the starting point following the [Nexus tutorial](https://nexusjs.org/getting-started/tutorial) up to Chapter 6 and then modifying the code to allow deployment to [Vercel](https://vercel.com)

## Prerequisites

To get started:

- make sure you got a postgres db running (or modify the prisma schema to link to a different DB type as per tutorial)
- make sure you have [Node](https://nodejs.org) installed
- make sure you have [yarn](https://yarnpkg.com/) installed or use npm if you prefer (untested)

Optional: Install and setup [direnv](https://direnv.net/) to run the `.envrc` file

## Getting started

1. Clone the repo
1. Run `yarn`
1. Add your postgres url to `prisma/.env` (follow nexus tutorial to setup with docker)
1. Run `yarn dev` to start the dev server with ts-node (nexus and prisma will programatically build)
1. Browse https://localhost:3000/api/graphl to check out the playground
1. Run `yarn deploy` to deploy to vercel and follow the usual vercel steps to setup your project
