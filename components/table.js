import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import {useState} from 'react';
  import {Link} from '@chakra-ui/react';

  export function TrackTable(props){

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
                <Th >Title</Th>
                <Th >Artist</Th>
                <Th >Popularity</Th>
            </Tr>
            </Thead>

            <Tbody>
                {props.data.tracks.slice(0,numRows).map((item, index) => (
                  <Tr key={index}>
                    <Td>{index+1}</Td>
                    {/* <Td padding={2}><Image src={item.image} key={item.image} height={40} width={40} border-radius={34} margin-left={3}></Image>{item.name}</Td> */}
                    <Td>
                        <Link href={`https://open.spotify.com/track/${item.id}`}>{item.name.length > 34 ? item.name.slice(0,34)+'...' : item.name}</Link>
                    </Td>
                    <Td >{item.artist.length > 34 ? item.artist.slice(0,34)+'...' : item.artist}</Td>
                    <Td > {item.popularity}%</Td>
                </Tr>  
                ))}
            </Tbody>
        </Table>
        </TableContainer>
    )
  }