export function cutOff(title, len){
    console.log('hello')
    console.log(title.length)
    
    if (title.length > len){
        title = title.substring(0,len) + '...'
    }
    return title
    
}
