export function cutOff(title, len){
    
    if (title.length > len){
        title = title.substring(0,len) + '...'
    }
    return title
    
}
