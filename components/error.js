import {Text, Flex} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons'

export function Error(){
    return(
        <Flex direction={'column'} justify={'space-between'} align={'center'} gap={3}>
        {/* <WarningIcon w={8} h={8} color="red.500" /> */}
        <Text size={'lg'}>Something went wrong. Refresh the page and try again</Text>
        <Text size={'lg'}>If you are downloading an image, check your downloads folder on your device</Text>
        </Flex>
    )
}

