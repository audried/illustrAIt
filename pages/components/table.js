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
        <Table variant='simple' colorScheme={'gray'}>

            <Thead>
            <Tr>
                <Th >#</Th>
                <Th >Title</Th>
                <Th >Artist</Th>
                <Th >Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.tracks.slice(0,10).map((item, index) => (
                  <Tr>
                    <Td>{index+1}</Td>
                    {/* <Td padding={2}><Image src={item.image} key={item.image} height={40} width={40} border-radius={34} margin-left={3}></Image>{item.name}</Td> */}
                    <Td>{item.name}</Td>
                    <Td >{item.artist}</Td>
                    <Td > {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }