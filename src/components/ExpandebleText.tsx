import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react'

interface Props{
    children:string | undefined
}

const ExpandebleText = ({children}:Props) => {

    const [expanded,setExpanded]=useState(false);

    const limit=300;

    if(!children) return null

    if(children.length <= limit) return <Text>{children}</Text>

    const summury=expanded ? children : children.substring(0,limit) + '...'

    return <Text>{summury}<Button size='xs' fontWeight='bold' colorScheme='yellow' marginLeft={1} onClick={()=>setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Read More'}</Button></Text>

}

export default ExpandebleText