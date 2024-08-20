import { HStack,Image } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <nav>
        <HStack>
            <Image src={Logo} alt="logo" boxSize={70}/> 
            <p>NavBar</p>
        </HStack>
    </nav>
  )
}

export default NavBar