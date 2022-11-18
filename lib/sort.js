//turn array with repeated elements into an array of 20, sorted by frequency desc


export const sortByFrequency = (array) => {
    var frequency = {};

    array.forEach(function(value) { frequency[value] = 0; });

    var uniques = array.filter(function(value) {
        return ++frequency[value] == 1;
    });

    uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });

    var toptengenres = uniques.length > 10 ? uniques.slice(0,10) : uniques
    var toptenfreq = toptengenres.map(g=>{
        return frequency[g]
    })

    console.log(toptengenres, toptenfreq)
    return [uniques.length > 20 ? uniques.slice(0,20) : uniques, toptengenres, toptenfreq]
}