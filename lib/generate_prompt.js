import {sortByFrequency} from './sort_by_frequency';
import { fixTitle } from './fix_titles';

export const generatePrompt = (tracks, artists) => {

    const top5tracks = tracks.slice(0,5).map(item =>{return item.name})
    const top5albums = tracks.slice(0,5).map(item =>{return item.album.name})
    //console.log("top5", top5albums)

    //sets options for diff parts of prompt
    const subjects = [" landscape", " dreamscape", " abstract art", " mountains", " psychedelic"]
    const formats = [", digital art", ", 3d render", ", 5mm film photograph", ", stained glass",  ", oil painting", ", hyperrealistic", ", ukioh-e", ", watercolor"]
    const styles = ["Ghibli", "Ivan Bilibin", "Monet", "Wes Anderson", "Toshi Toshiba", "Takashi Murakami", "Jean-Michel Basquiat", "Wassily Kandinsky", "Piet Mondrian"]

    //gets all genres of top 20 artists and sorts by frequency. Uses top overall genre to determine subject
    var genres = []
    var subject = ""
    var top_genre='pop'
    if (artists.length){
        artists.map(item =>{genres.push(...item.genres)})
        genres = sortByFrequency(genres)
        top_genre = genres[0]
    }
    
    if  (top_genre.includes('country') || top_genre.includes('bluegrass') || top_genre.includes('roots')){
        subject = ' landscape'
    }else if (top_genre.includes('holler') || top_genre.includes('folk') || top_genre.includes('indie') || top_genre.includes('mellow')){
        subject= [' mountains',' landscape',' dreamscape'][Math.floor((Math.random()*3))]
    }else if (top_genre.includes('pop') || top_genre.includes('alternative') || top_genre.includes('dance')){
        subject = ' dreamscape'
    }else if (top_genre.includes('rap') || top_genre.includes('hip') || top_genre.includes('urban') || top_genre.includes('rock') || top_genre.includes('punk') ){
        subject = ' abstract'
    }else if (top_genre.includes('edm') || top_genre.includes('EDM') || top_genre.includes('hyperpop') || top_genre.includes('psychedelic') || top_genre.includes('electronic')  ||top_genre.includes('house')){
        subject = [' psychedelic', ' synthwave'][Math.floor((Math.random()*2))]
    }else{
        subject = subjects[Math.floor((Math.random()*(subjects.length)))]
    }

    //removes any text in parenthese or after a hyphen
    var chosen_track = fixTitle(top5tracks[Math.floor((Math.random()*5))])
    var chosen_album = fixTitle(top5albums[Math.floor((Math.random()*5))])

    //builds dalle prompt
    var query = chosen_track + ' ' + chosen_album + subject
    //console.log("query", query)

    if (genres.length%2==0){
        //append format
        query += formats[Math.floor((Math.random()*(formats.length)))]
    }else{
        //append style
        query += " in the style of "
        query += styles[Math.floor((Math.random()*(styles.length)))]
    }

    //builds caption to display with art
    var caption = " AI generated art inspired by " + chosen_track + ",  " + chosen_album + ", and " + top_genre + " music"

    return ([query, caption, chosen_track, chosen_album, top_genre])
}

    
   
//format:
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