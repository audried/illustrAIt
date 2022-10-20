import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,

    TableContainer,
 
  } from '@chakra-ui/react'
// probably do not need all 4 rows, hard to view
  export function ArtistTable(props){
    return (
        <TableContainer>
        <Table variant='simple' colorScheme={'purple'}>

            <Thead>
            <Tr>
                <Th color='white'>Name</Th>
                <Th color='white'>Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.artists.slice(0,10).map((item) => (
                  <Tr>
                    <Td color='white'>{item.name}</Td>
                    <Td color='white'> {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }