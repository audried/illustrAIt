import {sortByFrequency} from './sort';
export const setArtistData = (items) => {

    let g = []
    let obj = {}
    let artists = []
    let avg_pop = 0

    for (let i=0; i<items.length; i++){
        let artist_obj = {}
      //console.log(items[i].id)
        artist_obj.name = items[i].name
        artist_obj.id = items[i].id
        g = [...g, ...items[i].genres]
        avg_pop += items[i].popularity
        artists.push(artist_obj)
    }
    avg_pop = avg_pop / items.length
    obj.artists = artists
    obj.avg_pop = avg_pop
    obj.genres = sortByFrequency(g)

    return (obj)

  }