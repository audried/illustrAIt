
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button, 
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from "next/link";
import {useSession, signIn, signOut} from 'next-auth/react';
//import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

// const Header = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//    hello
//   </Link>
// );

export default function Header() {

  return (
    <>
      <Box bg={'rgba(230, 230, 230, 0)'} px={4} py={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={8} alignItems={'center'}>
          <Link href = "/"><Image src='/logo2.png' height={60} width={260}></Image></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
               <Button size='md' color={'white'} variant='link' onClick={() => signOut()}>Sign out</Button>
                <NextLink href='/about' passHref>
                    <Link color={'white'} >About</Link>
                </NextLink>

             
            </HStack>
          </HStack>
          
        </Flex>

      </Box>

    </>
  );
}