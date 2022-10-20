import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Grid,
    GridItem,
    Text,
    Select
  } from '@chakra-ui/react';
  import Image from 'next/image'
// probably do not need all 4 rows, hard to view
  export function TrackTable(props){
    return (
        <TableContainer>
        <Table variant='simple' colorScheme={'purple'}>

            <Thead>
            <Tr>
                <Th color='white'>#</Th>
                <Th color='white'>Title</Th>
                <Th color='white'>Artist</Th>
                <Th color='white'>Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.tracks.slice(0,10).map((item, index) => (
                  <Tr>
                    <Td>{index}</Td>
                    <Td color='white'><Image src={item.image} key={item.image} height={30} width={30}></Image>{item.name}</Td>
                    <Td color='white'>{item.artist}</Td>
                    <Td color='white'> {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }