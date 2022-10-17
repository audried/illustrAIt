export const generatePrompt = (tracks, artists) => {
    
    
    const top3tracks = tracks.slice(0,3).map(item =>{return item.name})
    const top3albums = tracks.slice(0,3).map(item =>{return item.album.name})
    console.log(top3tracks, top3albums)

    return("a sunset in blues, pinks, and purples ovr the teton mountain range, photograph")
}

// {
//     album: {
//       album_type: 'ALBUM',
//       artists: [Array],
//       available_markets: [Array],
//       external_urls: [Object],
//       href: 'https://api.spotify.com/v1/albums/2Ril3zeU3IlvS6e4NQLWd2',
//       id: '2Ril3zeU3IlvS6e4NQLWd2',
//       images: [Array],
//       name: 'Shinebox',
//       release_date: '2001-01-01',
//       release_date_precision: 'day',
//       total_tracks: 12,
//       type: 'album',
//       uri: 'spotify:album:2Ril3zeU3IlvS6e4NQLWd2'
//     },
//     artists: [ [Object] ],
//     available_markets: [
//       'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
//       'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
//       'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
//       'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
//       'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
//       'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
//       'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
//       'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
//       'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
//       'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
//     ],
//     disc_number: 1,
//     duration_ms: 179266,
//     explicit: false,
//     external_ids: { isrc: 'NLK530700064' },
//     external_urls: {
//       spotify: 'https://open.spotify.com/track/6j9ZLPjBGBEn1M6UGjEnLa'
//     },
//     href: 'https://api.spotify.com/v1/tracks/6j9ZLPjBGBEn1M6UGjEnLa',
//     id: '6j9ZLPjBGBEn1M6UGjEnLa',
//     is_local: false,
//     name: "Everybody's Missing the Sun",
//     popularity: 39,
//     preview_url: 'https://p.scdn.co/mp3-preview/e5211daab0758d51d8e3a35f933f6d44a8da2746?cid=64c7a45e688d406fa1171bc6f56541ca',
//     track_number: 2,
//     type: 'track',
//     uri: 'spotify:track:6j9ZLPjBGBEn1M6UGjEnLa'
//   },

//   {
//     external_urls: {
//       spotify: 'https://open.spotify.com/artist/6AGUQK1EWK6nvN4pLIDQDQ'
//     },
//     followers: { href: null, total: 255707 },
//     genres: [
//       'indie poptimism',
//       'modern alternative rock',
//       'modern rock',
//       'neo mellow',
//       'pop rock',
//       'stomp and holler'
//     ],
//     href: 'https://api.spotify.com/v1/artists/6AGUQK1EWK6nvN4pLIDQDQ',
//     id: '6AGUQK1EWK6nvN4pLIDQDQ',
//     images: [ [Object], [Object], [Object] ],
//     name: "The Mowgli's",
//     popularity: 56,
//     type: 'artist',
//     uri: 'spotify:artist:6AGUQK1EWK6nvN4pLIDQDQ'
//   }