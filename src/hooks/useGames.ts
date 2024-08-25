import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
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

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery({
    queryKey: ["Games", gameQuery],
    queryFn: ({pageParam}) =>
      apiClient.get({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page:pageParam
        },
      }),
    staleTime: 60 * 1000,
    getNextPageParam:(lastPage,allPages)=>{
        return lastPage.next ? allPages.length + 1 : undefined
    },
    initialPageParam:1
  });
};

export default useGames;
