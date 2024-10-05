import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entities/Game";



const useGame=(id:string | number)=>{

    const apiClient = new ApiClient<Game>(`/games/${id}`);
    return useQuery({
        queryKey: ["Game details",id],
        queryFn: () =>apiClient.get(),
      });
}

export default useGame