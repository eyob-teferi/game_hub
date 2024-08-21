import { HStack,Image } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'
import { SwitchColor } from './SwitchColor'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(serachText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <nav>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={Logo} alt="logo" boxSize={"60px"}/> 
            <SearchInput onSearch={onSearch} />
            <SwitchColor />
        </HStack>
    </nav>
  )
}

export default NavBar