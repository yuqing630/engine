
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

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node/express server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Nextjs is used to bundle and serve our app. Everything to do with the frontend lives in `/client`.

Terminal tab #2:

```sh
npm run frontend


The tech stack I chose is react, nextjs and typescript in the front end with mui for design. I used node/express and typescript for the backend
I used swagger for the api documentation
and jest for testing

I used next and react because they offer a boiler plate and it was easy to set up.  Also next offered alot of powerful build in feature such as ssr and easily deployment on vercel

I used node and express because it help create api easily and help with development time

Im wasnt sure how should the data be proccess like what was being ask, so i simplified the data in the backend,  I removed some nexting of the object and sort the data by priority desc.

The challenge I faced was the setting up.  I havent set up an application from stratch for a long time and creating the jest config, tsconfig, eslint etc too longer than expected and prob alot of the thing there might not be needed.

Some of the things I would add on if I had more time is the lazing loading. Instead of pagination I would implement lazy loading that would load as  you scroll down. Another one is sorting, I would give user the option to sort by date, name, etc.  And the comment section, I would like the style it more like making it a dropdown when click or show the most popular one and rest behind a show more flag.
