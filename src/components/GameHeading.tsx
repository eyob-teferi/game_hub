import { Heading } from '@chakra-ui/react'
import useFindGenre from '../hooks/useFindGenre'
import useFindPlatform from '../hooks/useFindPlatform'
import useGameQueryStore from '../store'




const GameHeading = () => {

  const genreID=useGameQueryStore(s=>s.gameQuery.genreId)
  const genre=useFindGenre(genreID);

  const platformId=useGameQueryStore(s=>s.gameQuery.platformId)
  const platform=useFindPlatform(platformId);
  
  

    const heading=`${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading paddingLeft={2} marginY={5} size={'2xl'} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading