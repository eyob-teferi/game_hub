import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";


const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["Games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export default useGames;
