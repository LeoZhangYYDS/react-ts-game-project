import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("games");

//build a custom hook，so the whole app can use to fetch games
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  //1. useInfiniteQuery
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    //2. 设置初始页面
    initialPageParam: 1,
    queryKey: ["games", gameQuery],

    //4. 设置 pageParam=1
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam, //5.
        },
      }),
    //3. 设置翻页
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
};

export default useGames;
