## illustrait

This is a [Next.js](https://nextjs.org/) project built upon the Spotify API and Dalle API that allows users can view AI generated art inspired by their music taste.
View the website at [illustrait.us](https://nextjs.org/)

## To run this app locally:

Clone this repository and install all depenecies with `npm install`
You will need to have node installed. 
You will also need to add your own credentials for Spotify and OpenAI

#### Spotify Credentials

Navigate to the [https://developer.spotify.com/dashboard](Spotify for Developers Dashboard) and create a new application. 
In settings, register http://localhost:3000/api/auth/callback/spotify as a Redirect URI

Create a folder in the root directory named `.env` and add your Spotify Client ID and Client Secret. 
It should look like this:

```
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
```

#### OpenAI Credentials

Create an account on [https://beta.openai.com](https://beta.openai.com) and access your [https://beta.openai.com/account/api-keys](API keys)
Create a new secret key and add it to the .env file. It should now look like:

```
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
OPENAI_API_KEY=sk-xxxx
```

#### viewing the webpage

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying any of the files. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Spotify's resources for developers, check out [this page](https://developer.spotify.com/)

To learn more about DALLE-2 and Open AI, look [here](https://openai.com/dall-e-2/)




