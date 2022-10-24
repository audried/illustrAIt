//removes text inside parenthese and after -
export function fixTitle(title){

    title = title.indexOf(" - ") == -1 ? title : title.substring(0, title.indexOf(" - "))
    return title.replace(/\s*\(.*?\)\s*/g, '')

}