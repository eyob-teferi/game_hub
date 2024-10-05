
import { useParams } from 'react-router-dom'
import { Heading, Spinner, Text } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import ExpandebleText from '../components/ExpandebleText';


const GameDetailPage = () => {

    
    const {slug}=useParams()
    

    
    const {data,isLoading,error}=useGame(slug!);

     if(isLoading) return <Spinner />

     if(error) throw new Error("Something unexpected occurred");
     
    

  return (
    <>
        <Heading>{data?.name}</Heading>
        <ExpandebleText>{data?.description_raw}</ExpandebleText>
    </>
  )
}

export default GameDetailPage