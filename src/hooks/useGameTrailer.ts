

import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";



const useGameTrailer=(id: number)=>{

    const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);
    return useQuery({
        queryKey: ["Game Trailer",id],
        queryFn: () =>apiClient.getAll(),
      });
}

export default useGameTrailer