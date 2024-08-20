import { HStack,Image } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import { SwitchColor } from './SwitchColor'

const NavBar = () => {
  return (
    <nav>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={Logo} alt="logo" boxSize={70}/> 
            <SwitchColor />
        </HStack>
    </nav>
  )
}

export default NavBar