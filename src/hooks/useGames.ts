import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api-client";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>{
  return useQuery({
    queryKey: ["Games", gameQuery],
    queryFn: () =>
      apiClient
        .get<Response<Game>>("games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 60 * 1000,
  });
}
  

export default useGames;
