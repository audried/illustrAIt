import {Text, Flex} from '@chakra-ui/react';

export function Error(){
    return(
        <Flex direction={'column'} justify={'space-between'} align={'center'} gap={3}>
        {/* <WarningIcon w={8} h={8} color="red.500" /> */}
        <Text size={'lg'}>Something went wrong :( Please Refresh the page and try again</Text>
        </Flex>
    )
}

