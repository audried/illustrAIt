import {Text, Flex, Heading } from '@chakra-ui/react';
import { Bars } from  'react-loader-spinner';
import { WarningIcon } from '@chakra-ui/icons'
//uncomment to add 'loading...' under animation

export function Error(){
    return(
        // <Flex direction='column'>
        <Flex direction={'column'} justify={'space-between'} align={'center'} gap={3}>
        <WarningIcon w={8} h={8} color="red.500" />
        <Text size={'lg'}>Something went wrong. Refresh the page and try again</Text>
        </Flex>
    )
}

