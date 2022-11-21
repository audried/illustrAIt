import { Bars } from  'react-loader-spinner'

export function Loading(){
    return(
        <Bars
        height="80"
        width="80"
        color="magenta"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}
