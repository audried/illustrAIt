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
  } from '@chakra-ui/react'

  export function DataTable(props){
    return (
        <TableContainer>
        <Table variant='simple' colorScheme={'purple'}>

            <Thead>
            <Tr>
                <Th color='white'>Title</Th>
                <Th color='white'>Artist</Th>
                <Th color='white'>Album</Th>
                <Th color='white'>Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.tracks.slice(0,10).map((item) => (
                  <Tr>
                    <Td color='white'>{item.name}</Td>
                    <Td color='white'>{item.artist}</Td>
                    <Td color='white'> {item.album}</Td>
                    <Td color='white'> {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }