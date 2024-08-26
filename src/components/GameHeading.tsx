import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface Props{
    gameQuery:GameQuery
}


const GameHeading = ({gameQuery}:Props) => {

  const {data:platforms}=usePlatforms();

  const platform=platforms.results.find(p=>p.id===gameQuery.platformId)
  
  const {data:genres}=useGenres();

  const genre=genres?.results.find(g=>g.id===gameQuery.genreId)

    const heading=`${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading paddingLeft={2} marginY={5} size={'2xl'} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading