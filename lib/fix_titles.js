//removes text inside parenthese and after -
export function fixTitle(title){
    if (!title) return " "
    title = title.indexOf(" - ") == -1 ? title : title.substring(0, title.indexOf(" - "))
    title.replace(/\s*\(.*?\)\s*/g, '')
    return title.replace(/\s*\(.*?\)\s*/g, '')
}