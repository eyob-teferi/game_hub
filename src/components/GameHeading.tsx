import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useFindGenre from '../hooks/useFindGenre'
import useFindPlatform from '../hooks/useFindPlatform'

interface Props{
    gameQuery:GameQuery
}


const GameHeading = ({gameQuery}:Props) => {

  const platform=useFindPlatform(gameQuery.platformId);
  
  const genre=useFindGenre(gameQuery.genreId);

    const heading=`${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading paddingLeft={2} marginY={5} size={'2xl'} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading