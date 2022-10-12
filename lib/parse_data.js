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
//  }

import {sortByFrequency} from './sort';

export const parseData = (tracks, artists) => {
    console.log("here")

    let final_obj = {}
    let track_array = []
    let artist_array = []
    let album_array = []
    let track_pop = 0
    let artist_pop = 0
    let g = []
    

    for (let i=0; i<tracks.length; i++){
        let track_obj = {}
        track_obj.name = tracks[i].name
        track_obj.id = tracks[i].id
        track_obj.popularity = tracks[i].popularity
        track_obj.album = tracks[i].album.name
        track_pop += tracks[i].popularity
        album_array.push(tracks[i].album.name)
        track_array.push(track_obj)
    }
    track_pop = track_pop / tracks.length;

    for (let j=0; j<artists.length; j++){
        let artist_obj = {}
       
        artist_obj.name = artists[j].name
        artist_obj.id = artists[j].id
        g = [...g, ...artists[j].genres]
        artist_pop += artists[j].popularity
        artist_array.push(artist_obj)
    }
    artist_pop = artist_pop / artists.length;

    final_obj.tracks = track_array
    final_obj.artists = artist_array
    final_obj.albums = album_array
    final_obj.genres = sortByFrequency(g)
    final_obj.track_pop = track_pop
    final_obj.artist_pop = artist_pop
    final_obj.avg_pop = (track_pop+artist_pop)/2


    return final_obj

}