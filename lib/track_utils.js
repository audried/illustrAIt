export const setTrackData = (items) => {
    console.log("here")

    let obj = {}
    let tracks = []
    let avg_pop = 0

    for (let i=0; i<items.length; i++){
        let track_obj = {}
      //console.log(items[i].id)
        track_obj.name = items[i].name
        track_obj.id = items[i].id
        track_obj.popularity = items[i].popularity
        track_obj.album = items[i].album.name
        avg_pop += items[i].popularity
        tracks.push(track_obj)
    }
    avg_pop = avg_pop / items.length

    obj.tracks = tracks
    obj.avg_pop = avg_pop

    return (obj)

  }