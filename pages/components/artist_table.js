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
        <Table variant='simple' colorScheme={'blackAlpha.700'}>

            <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.artists.map((item) => (
                  <Tr>
                    <Td >{item.name}</Td>
                    <Td > {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }