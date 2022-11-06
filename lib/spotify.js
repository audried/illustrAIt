const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists';
const TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const AUDIO_ENDPOINT = 'https://api.spotify.com/v1/audio-features'

//const time_range= 'short_term'

//for top genres, will have to go through top artists and look up their genres


// calls the token endpoint and pass our refresh token in.
// We get an access token we can use to query the API - not valid forever
const getAccessToken = async (refresh_token) => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
  
    return response.json();
  };

  //TODO: add timerange query options

  export const getUsersTopArtists = async (refresh_token, time_range) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch(`${ARTISTS_ENDPOINT}?time_range=${time_range}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  export const getUsersTopTracks = async (refresh_token, time_range) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch(`${TRACKS_ENDPOINT}?time_range=${time_range}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  export const getAudioFeatures = async (refresh_token, ids) => {
    const {access_token} = await getAccessToken(refresh_token);
    return fetch(`${AUDIO_ENDPOINT}?ids=${ids}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  //TODO: audio features endpoint that adds trak id aray 