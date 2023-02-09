import {Text, Flex} from '@chakra-ui/react';

export function Error(){
    return(
        <Flex direction={'column'} justify={'space-between'} align={'center'} gap={3}>
        {/* <WarningIcon w={8} h={8} color="red.500" /> */}
        <Text size={'lg'}>Something went wrong :( Please Refresh the page or close this tab and try again</Text>
        <Text size={'lg'}>If the problem persists, send an email to audreydock1@gmail and I&#39;ll look into it ASAP</Text>
        </Flex>
    )
}

