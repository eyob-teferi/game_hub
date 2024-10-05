import { SimpleGrid,Text } from '@chakra-ui/react'
import { Game } from '../entities/Game'
import Critic from './Critic'
import DefinitionItem from './DefinitionItem'


interface Props{
    game:Game
}

const GameAttributes = ({game:data}:Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term='Platforms'>
          {data?.parent_platforms.map(({platform})=><Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
          <Critic score={data!.metacritic}/>
        </DefinitionItem>
        <DefinitionItem term='Genres'>
          {data?.genres.map(genre=><Text key={genre.id}>{genre.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
          {data?.publishers.map(publisher=><Text key={publisher.id}>{publisher.name}</Text>)}
        </DefinitionItem>
        </SimpleGrid>
  )
}

export default GameAttributes