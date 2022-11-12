## illustrait

This is a [Next.js](https://nextjs.org/) project built upon the Spotify API and Dalle API that allows users can view AI generated art inspired by their music taste. .

## Running the app locally:

Clone this repository and install all depenecies with `npm install`
You will need to have node installed. 
You will also need to add your own credentials for Spotify and OpenAI

#### Spotify Credentials

Navigate to the [https://developer.spotify.com/dashboard](Spotify for Developers Dashboard) and create a new application. 
In settings, register http://localhost:3000/api/auth/callback/spotify as a Redirect URI

Create a folder in the root directory named `.env` and add your Spotify Client ID and Client Secret. 
It should look like this:
```SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx```


#### OpenAI Credentials

Create an account on [https://beta.openai.com](https://beta.openai.com) and access your [https://beta.openai.com/account/api-keys](API keys)
Create a new secret key and add it to the .env file. It should now look like:

```SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
OPENAI_API_KEY=sk-xxxx```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


