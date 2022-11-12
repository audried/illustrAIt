
import {Text, Flex } from '@chakra-ui/react';
import { Bars } from  'react-loader-spinner'
//uncomment to add 'loading...' under animation

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
