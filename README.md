# Vue 3 + TypeScript + Vite + Vuetify 3 + Konva


## Description

This small example shows a minimal application using vite, vue 3 vuetify 3 and vue-konva 3 which CSS built result is not OK. 

The application only display a check box with Vuetify.

## How to use it

Use the docker to compile the application because on native ubuntu laptop the build of CSS is correct. 

First build the image: 
`docker build -t vue3-template .`

Then you can launch the app inside the container directly in preview mode
`docker run --name vue3-template -p 8080:8080 vue3-template`

Or you can use the container to run your own commands like `npm run dev`

`docker run -it -v .:/app -p 8080:8080 -p 3000:3000 vue3-template /bin/bash`

## Problem to solve

With `npm run dev` vite produces a correct result.
With `npm run preview` vite produces a wrong result.

Removing the konva usage in the `main.ts` file solves the problem. (see comment)

