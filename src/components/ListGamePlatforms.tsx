import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: { platform: Platform }[];
}

const ListGamePlatforms = ({ platform }: Props) => {

    const iconMap:{[key:string]:IconType}={
        xbox:FaXbox,
        playstation:FaPlaystation,
        pc:FaWindows,
        mac:FaApple,
        linux:FaLinux,
        nintendo:SiNintendo,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:BsAndroid2
    }
    if(!platform) return null
  return (
    <HStack marginY={1}>
      {platform.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default ListGamePlatforms;
