import { create } from "zustand";

// 该接口定义了 GameQuery 对象的结构，表示游戏查询时可以用到的参数。
// genreId：游戏类型的 ID，数字类型，表示某种类型的游戏（可选）。
// platformId：游戏平台的 ID，数字类型，用于表示游戏的运行平台（可选）。
// sortOrder：排序顺序的字符串，例如按照字母升序或降序排序（可选）。
// searchText：用户的搜索文本输入，字符串类型（可选）。
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

// GameQueryStore 接口定义了整个 Zustand store 的结构。它包含：
// gameQuery：一个对象，存储游戏查询参数，类型为 GameQuery。
// setSearchText：用于更新 gameQuery 中 searchText 属性的函数。
// setGenreId：用于更新 genreId 的函数。
// setPlatformId：用于更新 platformId 的函数。
// setSortOrder：用于更新 sortOrder 的函数。
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

// create 更新状态的方法
// 状态初始化：
// gameQuery: {} 初始化时是一个空对象，表示还没有任何游戏查询参数。

// 更新函数：
// setSearchText、setGenreId、setPlatformId、setSortOrder 函数都用于更新 gameQuery 对象中的相应属性。
// 例如，setSearchText 直接将 gameQuery 更新为 { searchText }，这会丢失其他字段（如 genreId、platformId 等）
// setGenreId、setPlatformId、setSortOrder 使用了 ...store.gameQuery，这样可以保留 gameQuery 中已有的属性，避免覆盖。
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

//export
export default useGameQueryStore;
