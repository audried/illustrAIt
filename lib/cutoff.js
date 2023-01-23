export function cutOff(title, len){
    if (title.length > len){
        return title.split(0,len)
    }
    return title
    
}
