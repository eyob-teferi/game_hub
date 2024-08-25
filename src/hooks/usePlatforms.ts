
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import platforms from "../data/platforms";


export interface Platform {
    id: number;
    name: string;
    slug: string;
  }


const usePlatforms=()=>{
    return useQuery({
        queryKey:['platforms'],
        queryFn:()=> apiClient.get<Response<Platform>>('/platforms/lists/parents').then(res=>res.data),
        staleTime:24*60*60*1000,
        initialData:{count:platforms.length,results:platforms}
    })
} 


export default usePlatforms;