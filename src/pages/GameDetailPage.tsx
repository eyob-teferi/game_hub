
import { useParams } from 'react-router-dom'
import { Heading, Spinner, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';


const GameDetailPage = () => {

    
    const {slug}=useParams()
    

    
    const {data,isLoading,error}=useGame(slug!);

     if(isLoading) return <Spinner />

     if(error) throw new Error("Something unexpected occurred");
     
    

  return (
    <>
        <Heading>{data?.name}</Heading>
        <Text>{data?.description_raw}</Text>
    </>
  )
}

export default GameDetailPage