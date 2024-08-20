import { Badge } from "@chakra-ui/react"

interface Props{
    score:number,
}

const Critic = ({score}:Props) => {
    const color=score > 75 ? 'green' :score > 60 ? "yellow" : ''
  return (
    <Badge fontSize={"16px"} colorScheme={color} size={'16px'} borderRadius={3}>{score}</Badge>
  )
}

export default Critic