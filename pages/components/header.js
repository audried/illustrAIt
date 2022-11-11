import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';

const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'rgba(1,1,1,0)'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <Link href = "/"><Image src='/logo2.png' height={40} width={180}></Image></Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NextLink href='/dashboard' passHref>
                  <Link color={'white'} >Dashboard</Link>
              </NextLink>
              <NextLink href='/about' passHref>
                <Link color={'white'} >About</Link>
              </NextLink>
              <NextLink href='/contact' passHref>
                <Link color={'white'} >Contact</Link>
              </NextLink>
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Button size='md' color={'white'} variant='link' onClick={() => signOut()}>Sign out</Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box bg={'whiteAlpha.400'} pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NextLink href='/dashboard' passHref>
                  <Link color={'white'} >Dashboard</Link>
              </NextLink>
              <NextLink href='/about' passHref>
                <Link color={'white'} >About</Link>
              </NextLink>
              <NextLink href='/contact' passHref>
                <Link color={'white'} >Contact</Link>
              </NextLink>
             
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}