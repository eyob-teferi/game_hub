
import { Image, ImageProps } from '@chakra-ui/react'
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thums from '../assets/thumbs-up.webp'

interface Props{
    rating:number
}

const Emoji = ({rating}:Props) => {

    if(rating < 3) return null

    const emoji:{[key:number]:ImageProps}={
        3:{src:meh,alt:'meh', boxSize:'20px'},
        4:{src:thums,alt:'Recomended',boxSize:'20px'},
        5:{src:bullsEye,alt:'Exeptional',boxSize:'25px'}
    }

    

  return (
    <Image {...emoji[rating]} marginTop={1}/>
  )
}

export default Emoji