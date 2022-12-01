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
 Button, 
  } from '@chakra-ui/react'
  import {useState} from 'react';
// probably do not need all 4 rows, hard to view
  export function ArtistTable(props){

    const [numRows, setNumRows] = useState(10);

    return (
        <TableContainer>
        <Table variant='simple' colorScheme={'gray'}>
        <TableCaption>
            {numRows==10 && <Button onClick={() => setNumRows(20)} variant='link' colorScheme={'blackAlpha.700'}>show more</Button>}
            {numRows==20 && <Button onClick={() => setNumRows(10)} variant='link' colorScheme={'blackAlpha.700'}>show less</Button>}
        </TableCaption>
            <Thead>
            <Tr>
                <Th >#</Th>
                <Th>Name</Th>
                <Th>Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.artists.slice(0,numRows).map((item, index) => (
                  <Tr key={index}>
                    <Td>{index+1}</Td>
                    <Td >{item.name.length > 34 ? item.name.slice(0,34)+'...' : item.name}</Td>
                    <Td > {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }