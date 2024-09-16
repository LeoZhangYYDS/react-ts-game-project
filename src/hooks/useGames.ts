import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

//build a custom hook，so the whole app can use to fetch games
const useGames = (gameQuery: GameQuery) =>
  //1. useInfiniteQuery
  useInfiniteQuery<FetchResponse<Game>, Error>({
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
  });

export default useGames;
