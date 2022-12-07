import {sortGenres} from './sort_genres';

export const parseData = (tracks, artists, features) => {

    let final_obj = {}
    let track_array = []
    let artist_array = []
    let album_array = []
    let track_pop = 0
    let artist_pop = 0
    let g = []
    let audio_features = []
    let feature_labels = ['instrumentalness', 'energy','acousticness','danceability','liveness']
    let danceability = 0
    let energy = 0
    let acousticness = 0
    let instrumentalness = 0
    let liveness = 0

    for (let i=0; i<tracks.length; i++){
        let track_obj = {}
        track_obj.name = tracks[i].name
        track_obj.id = tracks[i].id
        track_obj.popularity = tracks[i].popularity
        track_obj.album = tracks[i].album.name
        track_obj.artist = tracks[i].artists.map((a)=>{return a.name}).join(", ")
        track_obj.artistid = tracks[i].artists[0].id
        track_obj.image = tracks[i].album.images[0].url
        track_pop += tracks[i].popularity
        album_array.push(tracks[i].album.name)
        track_array.push(track_obj)
        danceability += features[i].danceability
        energy += features[i].energy
        acousticness += features[i].acousticness
        instrumentalness += features[i].instrumentalness
        liveness += features[i].liveness
    }
    track_pop = track_pop / tracks.length;
    audio_features.push(instrumentalness / tracks.length)
    audio_features.push(energy / tracks.length)
    audio_features.push(acousticness / tracks.length)
    audio_features.push(danceability / tracks.length)
    audio_features.push(liveness / tracks.length)
   
    for (let j=0; j<artists.length; j++){
        let artist_obj = {}
       
        artist_obj.name = artists[j].name
        artist_obj.id = artists[j].id
        artist_obj.popularity = artists[j].popularity
        g = [...g, ...artists[j].genres]
        artist_pop += artists[j].popularity
        artist_array.push(artist_obj)
    }
    artist_pop = artist_pop / artists.length;

    var gsort = sortGenres(g)

    //building final object available at api/userdata
    final_obj.tracks = track_array
    final_obj.artists = artist_array
    final_obj.albums = album_array
    final_obj.genres = gsort[0]
    final_obj.track_pop = track_pop
    final_obj.artist_pop = artist_pop
    final_obj.avg_pop = (track_pop+artist_pop)/2
    final_obj.audio_features = audio_features
    final_obj.feature_labels = feature_labels
    final_obj.pielabels = gsort[1]
    final_obj.piedata = gsort[2]

    return final_obj

}



// final_obj:
//  {
//      tracks: [
//          {name: "",
//          id: ##,
//          popularity: ##,
//          album: ""},
//      ],
//      artists: [
//          {name: "",
//          id: ##,
//          popularity: ##,
//          genres: ""},
//      ],
//      albums: [""],
//      genres: ["",],
//      track_pop: #,
//      artist_pop: #,
//      avg_pop: #,
//      features:[#,]
//      feature_labels = ["",]
//      
//  }

//track object:
// album: {
//     album_type: 'ALBUM',
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
//     external_urls: {
//       spotify: 'https://open.spotify.com/album/4jxokHekH1qSad1DcC82ku'
//     },
//     href: 'https://api.spotify.com/v1/albums/4jxokHekH1qSad1DcC82ku',
//     id: '4jxokHekH1qSad1DcC82ku',
//     images: [ [Object], [Object], [Object] ],
//     name: "Workingman's Dead",
//     release_date: '1970',
//     release_date_precision: 'year',
//     total_tracks: 8,
//     type: 'album',
//     uri: 'spotify:album:4jxokHekH1qSad1DcC82ku'
//   },
//   artists: [
//     {
//       external_urls: [Object],
//       href: 'https://api.spotify.com/v1/artists/4TMHGUX5WI7OOm53PqSDAT',
//       id: '4TMHGUX5WI7OOm53PqSDAT',
//       name: 'Grateful Dead',
//       type: 'artist',
//       uri: 'spotify:artist:4TMHGUX5WI7OOm53PqSDAT'
//     }
//   ],
//   available_markets: [
//     'AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH',
//     'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY',
//     'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG',
//     'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN',
//     'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO',
//     'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA',
//     'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ',
//     'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY',
//     'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH',
//     'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'
//   ],
//   disc_number: 1,
//   duration_ms: 284909,
//   explicit: false,
//   external_ids: { isrc: 'USWB11304500' },
//   external_urls: { spotify: 'https://open.spotify.com/track/0kp728Knw5PYvU3QzMZ0yJ' },
//   href: 'https://api.spotify.com/v1/tracks/0kp728Knw5PYvU3QzMZ0yJ',
//   id: '0kp728Knw5PYvU3QzMZ0yJ',
//   is_local: false,
//   name: "Uncle John's Band - 2013 Remaster",
//   popularity: 55,
//   preview_url: 'https://p.scdn.co/mp3-preview/facd4c87ff759d0ed4528e7142581d051c059fec?cid=64c7a45e688d406fa1171bc6f56541ca',
//   track_number: 1,
//   type: 'track',
//   uri: 'spotify:track:0kp728Knw5PYvU3QzMZ0yJ'
// }
