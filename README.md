
## Getting Started

1. **Initialize your environment**

I recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```
To use the correct node version run
nvm use

2. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

3. **Run the backend**

The backend is a node/express server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

4. **Run the frontend**

Nextjs is used to bundle and serve our app. Everything to do with the frontend lives in `/client`.

Terminal tab #2:

```sh
npm run frontend


The tech stack I chose is React, Next.js, and TypeScript for the frontend, with Material-UI (MUI) for design. For the backend, I used Node.js/Express and TypeScript. I utilized Swagger for API documentation and Jest for testing.

I chose Next.js and React due to their boilerplate setup and ease of use. Next.js provides powerful built-in features such as server-side rendering (SSR) and seamless deployment on Vercel.

Node.js and Express were selected for their ability to create APIs quickly and aid in development efficiency.

I was unsure about the data processing requirements, so I simplified the backend data by removing unnecessary nesting and sorting it by priority in descending order.

The main challenge I faced was the initial setup. It had been a while since I set up an application from scratch, and configuring Jest, tsconfig, ESLint, etc., took longer than expected. Some configurations might not have been necessary.

If I had more time, I would implement lazy loading instead of pagination for improved user experience. I would also add sorting options for users to sort by date, name, etc. Additionally, I would enhance the comment section by styling it as a dropdown when clicked or displaying the most popular comments with the rest hidden behind a "show more" button.
