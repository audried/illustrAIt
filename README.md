## illustrait

![f](/public/ss.png)

This is a [Next.js](https://nextjs.org/) project built upon the Spotify API and Dalle API that allows users can view AI generated art inspired by their music taste.
View the website at [illustrait.co](https://www.illustrait.co). 
You can also check out a demo [here](https://drive.google.com/file/d/1azRLGX-SkSVj5O6uI-O7sjR9ZP0zTjAQ/view?usp=sharing)

## To run this app locally:

Clone this repository and install all depenecies with `npm install`
You will need to have node installed. 
You will also need to add your own credentials for Spotify and OpenAI

#### Spotify Credentials

Navigate to the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard) and create a new application. 
In settings, register http://localhost:3000/api/auth/callback/spotify as a Redirect URI

Create a folder in the root directory named `.env` and add your Spotify Client ID and Client Secret. 
It should look like this:

```
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
```

#### OpenAI Credentials

Create an account on [https://beta.openai.com](https://beta.openai.com) and access your [API keys](https://beta.openai.com/account/api-keys)
Create a new secret key and add it to the .env file. It should now look like:

```
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
OPENAI_API_KEY=sk-xxxx
```

#### NextAuth Environment Variables

Set the NEXTAUTH_URL Environment variable to the url of your site. When running it locally it will probably be `http://localhost:3000`.   
You also need to create a random string to use as a nextAuth secret. You can do so on the command line with this `openssl` command:
```
$ openssl rand -base64 32
```


Your .env file should now look like this:
```
SPOTIFY_CLIENT_ID=xxxx
SPOTIFY_CLIENT_SECRET=xxxx
OPENAI_API_KEY=sk-xxxx
NEXTAUTH_SECRET=xxxx
NEXTAUTH_URL=http://localhost:3000
```

#### Running the app

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




