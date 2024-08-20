import { Card,CardBody,Heading,Image,  } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import ListGamePlatforms from './ListGamePlatforms'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden' >
        <Image src={game.background_image} alt="game image" />
        <CardBody>
            <ListGamePlatforms platform={game.parent_platforms} />
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard